import PostCommentList from '@/components/Post/PostCommentList';
import PostUser from '@/components/Post/PostUser';
import UserBox from '@/components/UserBox';
import { getPostById, getPostCommentById } from '@/service/postService';
import { getUserById } from '@/service/userService';
import { MessageSquare } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

type PostDetailPageProps = {
  params: {
    postid: number;
  };
};

export async function generateMetadata({
  params,
}: PostDetailPageProps): Promise<Metadata> {
  const postId = params.postid;
  const post = await getPostById(postId);

  return {
    title: post.title,
    description: post.body.slice(0, 150),
  };
}

async function PostDetailPage({ params }: PostDetailPageProps) {
  const postId: number = params.postid;
  const postData = getPostById(postId);
  const commentsData = getPostCommentById(postId);
  const [post, comments] = await Promise.all([postData, commentsData]);
  const user = await getUserById(post.user_id);

  return (
    <section>
      <div className="center-object mx-auto w-full max-w-3xl flex-col gap-6 py-6 lg:gap-10 lg:py-10">
        <h2 className="text-center text-2xl font-semibold leading-[2.5rem] md:max-w-2xl lg:text-5xl lg:leading-[3.5rem]">
          {post.title}
        </h2>
        <div className="flex items-center gap-3">
          <UserBox />
          {user.data?.name ? (
            <Link href={`/users/${user.data.id}`}>
              <PostUser username={user.data.name} />
            </Link>
          ) : (
            <PostUser username="Unknwon User" />
          )}
        </div>

        <div className="border-t pt-6 lg:pt-10">
          <p className="text-sm leading-[1.4rem] tracking-wide md:text-base md:leading-[1.7rem] lg:text-lg lg:leading-[2rem]">
            {post.body}
          </p>
        </div>

        <div className="flex w-full flex-col space-y-5 pt-10">
          <h3 className="inline-flex items-center text-base font-semibold tracking-wide md:text-lg">
            <MessageSquare className="me-3 h-4 w-auto md:h-5" />
            Responses ({comments?.length ?? '0'})
          </h3>

          <div className="border-t pt-5">
            <PostCommentList comments={comments} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostDetailPage;
