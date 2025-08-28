import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';
import { findAllPublicPosts } from '@/lib/post/queries';

export default async function PostFeatured() {
  const posts = await findAllPublicPosts();
  const post = posts[0];
  const postLink = `/post/${post.slug}`;
  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          src: post.coverImageUrl,
          alt: post.title,
          height: 720,
          width: 1200,
          priority: true,
        }}
      />
      <PostSummary
        excerpt={post.excerpt}
        createdAt={post.createdAt}
        title={post.title}
        postLink={postLink}
        postHeading='h1'
      />
    </section>
  );
}
