import { getPostCommentById, getPostDataById } from '@/service/postService';
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';
import UserBox from '../UserBox';
import PostCommentList from './PostCommentList';

const PostDetailContent = async ({ postId }: { postId: number }) => {
  const postData = getPostDataById(postId);
  const commentsData = getPostCommentById(postId);
  const [post, comments] = await Promise.all([postData, commentsData]);

  return (
    <div className="center-object mx-auto w-full max-w-3xl flex-col gap-6 py-6 lg:gap-10 lg:py-10">
      <h2 className="text-center text-2xl font-semibold leading-[2.5rem] md:max-w-2xl lg:text-5xl lg:leading-[3.5rem]">
        {post.title}
      </h2>
      <div className="flex items-center gap-3">
        <UserBox />
        <Link href={`/users/${post.id}`}>
          <span className="font-sans text-sm text-orange-600 md:text-base lg:text-lg">
            BlogHub&apos; User
          </span>
        </Link>
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
  );
};

export default PostDetailContent;
