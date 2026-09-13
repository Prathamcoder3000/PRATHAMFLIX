import { NextRequest, NextResponse } from "next/server";
import { contactService } from "@/lib/contact";

export async function POST(req: NextRequest) {
  // 1. Content-Type check
  const contentType = req.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      {
        success: false,
        status: "validation_error",
        message: "Invalid content type. Expected application/json.",
      },
      { status: 400 }
    );
  }

  // 2. Parse payload safely
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      {
        success: false,
        status: "validation_error",
        message: "Malformed JSON payload.",
      },
      { status: 400 }
    );
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json(
      {
        success: false,
        status: "validation_error",
        message: "Request body must be an object.",
      },
      { status: 400 }
    );
  }

  // 3. Client identifier for rate limiting
  const forwarded = req.headers.get("x-forwarded-for");
  const clientIp = forwarded
    ? forwarded.split(",")[0].trim()
    : req.headers.get("x-real-ip") || "127.0.0.1";

  // 4. Process submission through ContactService
  const result = await contactService.processSubmission(body, clientIp);

  let httpStatus = 200;
  if (result.status === "validation_error") {
    httpStatus = 400;
  } else if (result.status === "rate_limited") {
    httpStatus = 429;
  } else if (result.status === "unconfigured") {
    httpStatus = 503;
  } else if (result.status === "delivery_failed") {
    httpStatus = 500;
  }

  return NextResponse.json(result, { status: httpStatus });
}
