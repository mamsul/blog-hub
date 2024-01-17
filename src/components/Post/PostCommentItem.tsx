import UserBox from '../UserBox';

type PostCommentItemProps = {
  comment: IPostComment;
};

const PostCommentItem = ({ comment }: PostCommentItemProps) => {
  return (
    <div className="flex w-full flex-col space-y-3">
      <div className="flex items-center gap-3">
        <UserBox />
        <span className="font-sans text-sm text-orange-600 md:text-base">
          {comment.name}
        </span>
      </div>
      <p className="text-sm md:text-base">{comment.body}</p>
    </div>
  );
};

export default PostCommentItem;
