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
        'flex h-auto w-full flex-col space-y-3 border-b border-gray-300 py-3 lg:space-y-6 lg:py-5',
        'transition-all duration-300 hover:-translate-y-3',
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
        <span className="font-sans text-sm text-orange-600 lg:text-base">
          BlogHub&apos;s user
        </span>
      </div>
    </div>
  );
};

export default PostItem;
