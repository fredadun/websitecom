import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

/**
 * Get all markdown files from a directory
 * @param directory - The directory to get files from (relative to content folder)
 * @returns Array of file names without extension
 */
export function getContentFiles(directory: string): string[] {
  const contentDirectory = path.join(process.cwd(), 'src', 'content', directory);
  const fileNames = fs.readdirSync(contentDirectory);
  return fileNames.filter(fileName => fileName.endsWith('.md')).map(fileName => fileName.replace(/\.md$/, ''));
}

/**
 * Get content data for a specific file
 * @param directory - The directory to get file from (relative to content folder)
 * @param slug - The slug (filename without extension)
 * @returns Object containing frontmatter data and content
 */
export function getContentBySlug(directory: string, slug: string): {
  slug: string;
  content: string;
  [key: string]: string | number | boolean | Record<string, unknown>;
} {
  const contentDirectory = path.join(process.cwd(), 'src', 'content', directory);
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...data,
  };
}

/**
 * Get all content data from a directory
 * @param directory - The directory to get files from (relative to content folder)
 * @returns Array of objects containing frontmatter data and slugs
 */
export function getAllContent(directory: string): Array<{
  slug: string;
  date?: string;
  [key: string]: string | number | boolean | Record<string, unknown> | undefined;
}> {
  const slugs = getContentFiles(directory);
  // Use explicit type for content items
  type ContentItem = {
    slug: string;
    date?: string;
    [key: string]: string | number | boolean | Record<string, unknown> | undefined;
  };

  const content = slugs.map(slug => {
    // Omit content property as we don't need it here
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { content, ...contentData } = getContentBySlug(directory, slug);
    // Ensure we don't have duplicate slug property
    const result: ContentItem = { ...contentData } as ContentItem;
    result.slug = slug;
    return result;
  });

  // Sort by date if available
  return content.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return 0;
  });
}

/**
 * Convert markdown content to HTML
 * @param markdown - The markdown content to convert
 * @returns HTML string
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
