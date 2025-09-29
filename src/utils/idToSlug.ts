export function idToSlug(id: string): string {
  // Example id: "posts/summary/2019.md" → "summary/2019"
  return id
    .replace(/^posts\//, '')
    .replace(/\.(md|mdx)$/i, '');
}
