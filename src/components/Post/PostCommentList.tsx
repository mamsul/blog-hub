import PostCommentItem from './PostCommentItem';

type PostCommentListProps = {
  comments: IPostComment[];
};

const PostCommentList = ({ comments }: PostCommentListProps) => {
  return (
    <div className="flex flex-col gap-5 px-5 md:gap-8 md:px-8">
      {comments?.map((comment) => {
        return <PostCommentItem key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default PostCommentList;
