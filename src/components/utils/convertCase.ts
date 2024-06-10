export function toSnakeCase(string: string): string {
  if (!string) return string; // Handle empty strings
  return string.toLowerCase().replace(/\s+/g, "_");
}
