const UserListShimer = () => {
  return (
    <div className="grid w-full animate-pulse grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
      {Array.from(Array(9).keys())?.map((item) => {
        return (
          <div
            key={item}
            className="flex h-36 w-full justify-between rounded bg-[#EBD9B4]/30 p-2 transition-transform duration-300 hover:scale-105 lg:h-44 lg:p-4">
            <div className="center-object w-3/12">
              <div className="h-12 w-12 bg-slate-400 p-2 sm:h-16 sm:w-16 xl:h-20 xl:w-20 xl:p-4" />
            </div>
            <div className="flex h-full w-9/12 flex-col justify-between p-2">
              <div className="flex flex-col space-y-1">
                <div className="h-5 w-full bg-slate-400"></div>
                <div className="h-5 w-full bg-slate-400"></div>
              </div>
              <div className="flex h-8 justify-between gap-2 bg-slate-400 text-xs font-medium"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserListShimer;
