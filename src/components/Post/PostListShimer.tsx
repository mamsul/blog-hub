const PostListShimer = () => {
  return (
    <div className="grid grid-cols-1 gap-x-0 gap-y-5 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
      {Array.from(Array(6).keys()).map((item) => {
        return (
          <div
            key={item}
            className="flex h-auto w-full animate-pulse flex-col space-y-3  py-3 lg:h-72 lg:space-y-6 lg:py-0">
            <div className="h-12 rounded-lg bg-slate-400 lg:h-28" />
            <div className="h-12 rounded-lg bg-slate-400 lg:h-28" />
            <div className="h-6 w-6/12 rounded-lg bg-slate-400 lg:h-10" />
          </div>
        );
      })}
    </div>
  );
};

export default PostListShimer;
