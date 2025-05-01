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
  [key: string]: any;
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
  [key: string]: any;
}> {
  const slugs = getContentFiles(directory);
  const content = slugs.map(slug => {
    const { content, ...data } = getContentBySlug(directory, slug);
    return {
      slug,
      ...data,
    };
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
