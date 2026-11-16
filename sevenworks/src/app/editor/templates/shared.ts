// Helpers shared by the resume templates.

type ContactKey = "address" | "phone" | "email";

// Joins the filled-in contact fields with " | ", skipping empty ones.
export function contactLine(
  formData: { [key: string]: unknown },
  keys: ContactKey[] = ["address", "phone", "email"],
): string {
  return keys
    .map((key) => formData[key])
    .filter((value): value is string => typeof value === "string" && value.trim() !== "")
    .join(" | ");
}
