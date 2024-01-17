import PostPaginateBtn from './PostPaginateBtn';

const PostPagination = () => {
  const isDisabled: boolean = true;

  return (
    <div className="flex h-full w-max gap-3">
      <PostPaginateBtn isDisabled={isDisabled} type="prev" />
      <PostPaginateBtn type="next" />
    </div>
  );
};

export default PostPagination;
