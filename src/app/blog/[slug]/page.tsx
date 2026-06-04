import BlogPostClient from './BlogPostClient';
import { blogPosts, getBlogPostBySlug } from "@/lib/blogData";
import { notFound } from "next/navigation";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex(p => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <BlogPostClient
      post={post}
      prevPost={prevPost}
      nextPost={nextPost}
    />
  );
}
