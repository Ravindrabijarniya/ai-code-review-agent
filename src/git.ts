import { execSync } from "child_process";

const MAX_DIFF_CHARS = 8000; // safe limit

export function getGitDiff(): string {
  try {
    const diff = execSync("git diff --cached", {
      encoding: "utf-8",
      maxBuffer: 10 * 1024 * 1024,
    });

    if (diff.length > MAX_DIFF_CHARS) {
      return (
        diff.slice(0, MAX_DIFF_CHARS) +
        "\n\n⚠️ Diff truncated due to size limit."
      );
    }

    return diff;
  } catch (err) {
    return "";
  }
}
