import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

console.log("ENV FILE LOADED:", !!process.env.OPENAI_API_KEY);

import { getGitDiff } from "./git.js";
import { reviewCode } from "./ai.js";
import { classifyReview } from "./reviewer.js";

// console.log("API KEY LOADED:", !!process.env.OPENAI_API_KEY);

async function main() {
  const diff = await getGitDiff();

  if (!diff) {
    console.log("No changes detected.");
    return;
  }

  const review = await reviewCode(diff);

  if (!review) {
    console.log("No review generated.");
    return;
  }

  console.log("\n🧠 AI Review:\n");
  console.log(review);

  const result = classifyReview(review);

  if (result === "FAIL") {
    console.error("\n❌ Commit blocked due to critical issues.");
    process.exit(1);
  }

  console.log("\n✅ Commit allowed.");
}

main();

// test comment for AI review

const password = "123456"; // insecure test
