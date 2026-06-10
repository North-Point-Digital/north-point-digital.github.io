import type { CollectionEntry } from 'astro:content';

export function slugifyCategory(category: string): string {
  return category
    .toLowerCase()
    .replace(/&/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function sortByDate(posts: CollectionEntry<'blog'>[]): CollectionEntry<'blog'>[] {
  return [...posts].sort(
    (a, b) => new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime()
  );
}

export function uniqueCategories(posts: CollectionEntry<'blog'>[]): { name: string; slug: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const post of posts) {
    counts.set(post.data.category, (counts.get(post.data.category) || 0) + 1);
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, slug: slugifyCategory(name), count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export const POSTS_PER_PAGE = 9;
