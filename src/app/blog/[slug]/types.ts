// Define the blog post type
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  readingTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  categories: string[];
  content: string;
  relatedPosts?: {
    slug: string;
    title: string;
    excerpt: string;
    image: string;
  }[];
}
