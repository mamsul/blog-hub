import PostDetailContent from '@/components/Post/PostDetailContent';
import PostDetailShimer from '@/components/Post/PostDetailShimer';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Post Detail',
};

type PostDetailPageProps = {
  params: {
    postid: number;
  };
};

function PostDetailPage({ params }: PostDetailPageProps) {
  const postId: number = params.postid;

  return (
    <section>
      <Suspense fallback={<PostDetailShimer />}>
        <PostDetailContent postId={postId} />
      </Suspense>
    </section>
  );
}

export default PostDetailPage;
