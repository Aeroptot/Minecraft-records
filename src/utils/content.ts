import type { CollectionEntry } from 'astro:content';

export function isPublished<T extends { data: { draft?: boolean } }>(
  entry: T
): boolean {
  return !entry.data.draft;
}

export function sortByDateDesc<T extends { data: { date: Date } }>(
  entries: T[]
): T[] {
  return [...entries].sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );
}

export function sortByDateAsc<T extends { data: { date: Date } }>(
  entries: T[]
): T[] {
  return [...entries].sort(
    (a, b) => a.data.date.getTime() - b.data.date.getTime()
  );
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function estimateReadingTime(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function getSlug(id: string): string {
  return id.replace(/\.(md|mdx)$/, '');
}

export function collectionUrl(collection: 'articles' | 'world', id: string): string {
  return withBase(`/${collection}/${getSlug(id)}/`);
}

export function getRelatedArticles(
  current: CollectionEntry<'articles'>,
  allArticles: CollectionEntry<'articles'>[],
  limit = 3
): CollectionEntry<'articles'>[] {
  const currentTags = new Set(current.data.tags);
  return allArticles
    .filter((a) => a.id !== current.id)
    .map((article) => ({
      article,
      score: article.data.tags.filter((t) => currentTags.has(t)).length,
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || b.article.data.date.getTime() - a.article.data.date.getTime())
    .slice(0, limit)
    .map(({ article }) => article);
}

export function extractHeadings(markdown: string): { depth: number; text: string; slug: string }[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: { depth: number; text: string; slug: string }[] = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const depth = match[1].length;
    const text = match[2].replace(/\*\*|__/g, '').trim();
    const slug = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
    headings.push({ depth, text, slug });
  }

  return headings;
}

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  if (path.startsWith('http') || path.startsWith('//')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized.slice(1)}`.replace(/\/+/g, '/');
}
