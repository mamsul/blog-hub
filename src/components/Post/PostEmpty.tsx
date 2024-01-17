const PostEmpty = () => {
  return (
    <div className="mx-auto mt-20 flex w-full flex-col items-center justify-center space-y-4 xs:w-3/5">
      <p className="text-start text-lg font-semibold capitalize xs:text-xl md:text-2xl lg:text-5xl">
        Sorry, no more posts can be shown.
      </p>
    </div>
  );
};

export default PostEmpty;
