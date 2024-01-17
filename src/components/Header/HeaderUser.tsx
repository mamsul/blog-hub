import { UsersIcon } from 'lucide-react';

const HeaderUser = () => {
  return (
    <button className="inline-flex h-max w-auto items-center rounded-full">
      <UsersIcon className="h-4 w-auto lg:h-[1.35rem]" />
      <span className="ms-1.5 text-sm font-medium sm:ms-3 lg:text-base">
        Users
      </span>
    </button>
  );
};

export default HeaderUser;
