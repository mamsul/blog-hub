import PostDetailContent from '@/components/Post/PostDetailContent';
import { Metadata } from 'next';

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
      <PostDetailContent postId={postId} />
    </section>
  );
}

export default PostDetailPage;
