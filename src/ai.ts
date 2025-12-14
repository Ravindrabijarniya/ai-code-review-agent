import OpenAI from "openai";

function getClient() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY not loaded");
  }

  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

export async function reviewCode(diff: string): Promise<string> {
    try {
        const client = getClient();

        const response = await client.responses.create({
            model: "gpt-4o-mini",
            input: diff,
        });

        return response.output_text ?? "";
    } catch (err: any) {
        if (err?.status === 429) {
            return "⚠️ AI review skipped: API quota exceeded.";
        }

        console.error("❌ OpenAI error:", err);
        return "AI review failed due to API error.";
    }
}
