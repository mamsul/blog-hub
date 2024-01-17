import PostEmpty from './PostEmpty';
import PostItem from './PostItem';

type PostListProps = {
  posts: IPost[];
};

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className="grid grid-cols-1 gap-x-0 gap-y-5 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
      {posts.length > 0 ? (
        posts.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })
      ) : (
        <PostEmpty />
      )}
    </div>
  );
};

export default PostList;
