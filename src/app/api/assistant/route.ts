import { NextRequest, NextResponse } from "next/server";
import { processAssistantQuery } from "@/lib/ai/assistant-service";
import type { AssistantRequestBody, AssistantResponseBody } from "@/types/ai-assistant";

export const runtime = "nodejs";

export async function POST(req: NextRequest): Promise<NextResponse<AssistantResponseBody>> {
  try {
    // 1. IP extraction for rate limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    // 2. Parse payload safely
    let body: AssistantRequestBody;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          isConfigured: false,
          error: "Invalid request payload. Expected JSON body.",
          message: {
            id: `err-${Date.now()}`,
            role: "assistant",
            content: "I couldn't process that request due to a formatting issue. Please try again.",
            timestamp: Date.now(),
          },
        },
        { status: 400 }
      );
    }

    // 3. Validate request format
    if (!body || !Array.isArray(body.messages) || body.messages.length === 0) {
      return NextResponse.json(
        {
          success: false,
          isConfigured: false,
          error: "Missing or invalid 'messages' array in request body.",
          message: {
            id: `err-${Date.now()}`,
            role: "assistant",
            content: "Please provide a valid question to start the conversation.",
            timestamp: Date.now(),
          },
        },
        { status: 400 }
      );
    }

    // 4. Validate message lengths and conversation size
    const latestMessage = body.messages[body.messages.length - 1];
    if (!latestMessage || typeof latestMessage.content !== "string" || !latestMessage.content.trim()) {
      return NextResponse.json(
        {
          success: false,
          isConfigured: false,
          error: "Latest message cannot be empty.",
          message: {
            id: `err-${Date.now()}`,
            role: "assistant",
            content: "Please enter a message to ask the portfolio assistant.",
            timestamp: Date.now(),
          },
        },
        { status: 400 }
      );
    }

    if (latestMessage.content.length > 1000) {
      return NextResponse.json(
        {
          success: false,
          isConfigured: false,
          error: "Message exceeds maximum length of 1000 characters.",
          message: {
            id: `err-${Date.now()}`,
            role: "assistant",
            content: "Your message is a bit too long. Please keep your question under 1,000 characters.",
            timestamp: Date.now(),
          },
        },
        { status: 400 }
      );
    }

    // Limit conversation context array to max 12 turns
    const trimmedMessages = body.messages.slice(-12);

    // 5. Process query through Assistant Service
    const response = await processAssistantQuery(
      {
        messages: trimmedMessages,
        profileMode: body.profileMode || "pratham",
      },
      ip
    );

    const statusCode = response.success ? 200 : (response.error?.includes("Too many") ? 429 : 200);

    return NextResponse.json(response, { status: statusCode });
  } catch (error) {
    console.error("[API/assistant] Unhandled error:", error);
    return NextResponse.json(
      {
        success: false,
        isConfigured: false,
        error: "Internal server error occurred.",
        message: {
          id: `err-${Date.now()}`,
          role: "assistant",
          content: "A temporary system error occurred while generating a response. You can explore the portfolio sections directly in the meantime.",
          timestamp: Date.now(),
          actions: [
            { label: "Explore Projects", href: "/projects" },
            { label: "Contact Pratham", href: "/contact" },
          ],
        },
      },
      { status: 500 }
    );
  }
}
