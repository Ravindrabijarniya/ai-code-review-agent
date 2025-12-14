export function classifyReview(review: string) {
  if (review.includes("Critical")) return "FAIL";
  if (review.includes("Security")) return "WARN";
  return "PASS";
}
