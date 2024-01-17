import { CommentsDummy } from '@/lib/data';
import PostCommentItem from './PostCommentItem';

const PostCommentList = () => {
  return (
    <div className="flex flex-col gap-5 px-5 md:gap-8 md:px-8">
      {CommentsDummy.map((comment) => {
        return <PostCommentItem key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default PostCommentList;
