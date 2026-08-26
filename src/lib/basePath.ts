export const BASE_PATH = "";

export function asset(path: string): string {
  if (!path || path.startsWith("http") || path.startsWith("data:")) return path;
  return `${BASE_PATH}${path.startsWith("/") ? "" : "/"}${path}`;
}
