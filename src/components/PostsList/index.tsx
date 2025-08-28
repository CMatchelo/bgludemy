import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';
import { findAllPublicPosts } from '@/lib/post/queries';

export default async function PostsList() {
  const posts = await findAllPublicPosts();
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {posts.slice(1).map(post => {
        const postLink = `/post/${post.slug}`;
        return (
          <div key={post.id} className='flex flex-col gap-4 group'>
            <PostCoverImage
              linkProps={{
                href: postLink,
              }}
              imageProps={{
                height: 720,
                width: 1200,
                priority: true,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />
            <PostSummary
              excerpt={post.excerpt}
              createdAt={post.createdAt}
              title={post.title}
              postLink={postLink}
              postHeading='h2'
            />
          </div>
        );
      })}
    </div>
  );
}
