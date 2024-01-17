import { cn } from '@/lib/utils';
import Link from 'next/link';
import UserBox from '../UserBox';

type PostItemProps = {
  post: IPost;
};

const PostItem = ({ post }: PostItemProps) => {
  return (
    <div
      className={cn(
        'flex h-auto w-full flex-col space-y-3 border-b border-gray-300 py-3 lg:h-72 lg:space-y-6 lg:py-0',
      )}>
      <Link href={`/post/${post.id}`}>
        <h2 className="line-clamp-3 text-xl font-semibold transition-all hover:underline lg:text-3xl">
          {post.title}
        </h2>
      </Link>

      <p className="line-clamp-2 text-sm text-gray-600 lg:line-clamp-3 lg:text-base">
        {post.body}
      </p>

      <div className="flex items-center gap-3">
        <UserBox />
        <Link href={`/users/${post.user_id}`}>
          <span className="font-sans text-sm text-orange-600 lg:text-base">
            BlogHub&apos;s user
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
