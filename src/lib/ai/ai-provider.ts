export interface IAIProvider {
  name: string;
  isConfigured(): boolean;
  generateResponse(
    messages: Array<{ role: "user" | "assistant"; content: string }>,
    systemPrompt: string
  ): Promise<{ text: string; error?: string; isConfigured: boolean }>;
}

export class GeminiAIProvider implements IAIProvider {
  name = "Google Gemini";

  private apiKey = process.env.GEMINI_API_KEY || process.env.AI_API_KEY;

  isConfigured(): boolean {
    return Boolean(this.apiKey && this.apiKey.trim().length > 0);
  }

  async generateResponse(
    messages: Array<{ role: "user" | "assistant"; content: string }>,
    systemPrompt: string
  ): Promise<{ text: string; error?: string; isConfigured: boolean }> {
    if (!this.isConfigured()) {
      return {
        text: "",
        isConfigured: false,
      };
    }

    try {
      // Format messages for Gemini API
      const contents = messages.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.apiKey}`;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: systemPrompt }],
          },
          contents,
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 800,
          },
        }),
      });

      if (!response.ok) {
        return {
          text: "",
          isConfigured: true,
          error: "AI service temporarily unavailable.",
        };
      }

      const data = await response.json();
      const generatedText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I was unable to generate a response. Please explore the portfolio sections directly.";

      return {
        text: generatedText,
        isConfigured: true,
      };
    } catch {
      return {
        text: "",
        isConfigured: true,
        error: "Network error during AI model communication.",
      };
    }
  }
}

export const defaultAIProvider = new GeminiAIProvider();
