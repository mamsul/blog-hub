import { PostsDummy } from '@/lib/data';
import PostItem from './PostItem';

const PostList = () => {
  return (
    <div className="grid grid-cols-1 gap-x-0 gap-y-5 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
      {PostsDummy.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </div>
  );
};

export default PostList;
