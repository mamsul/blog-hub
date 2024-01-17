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
    <div className="center-object mx-auto w-full max-w-3xl flex-col gap-6 py-6 lg:gap-10 lg:py-10">
      <Suspense fallback={<PostDetailShimer />}>
        <PostDetailContent postId={postId} />
      </Suspense>
    </div>
  );
}

export default PostDetailPage;
