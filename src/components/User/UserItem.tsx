'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Badge from '../Badge';
import { Button } from '../Button';
import UserBox from '../UserBox';

type UserItemProps = {
  user: IUser;
};

const UserItem = ({ user }: UserItemProps) => {
  const router = useRouter();
  const badgeVariant = user.status === 'active' ? 'success' : 'danger';

  const handleEditUser = () => {
    router.push(`/users/edit/${user.id}`);
  };

  const handleRemoveUser = () => {
    alert('Are you sure want to remove this user?');
  };

  return (
    <div className="flex h-36 w-full justify-between rounded bg-[#EBD9B4]/30 p-2 transition-transform duration-300 hover:scale-105 lg:h-44 lg:p-4">
      <div className="center-object w-3/12">
        <UserBox className="h-12 w-12 p-2 sm:h-16 sm:w-16 xl:h-20 xl:w-20 xl:p-4" />
      </div>
      <div className="flex h-full w-9/12 flex-col justify-between p-2">
        <div className="flex flex-col space-y-1">
          <Link
            href={`/users/${user.id}`}
            className="text-base font-medium underline-offset-2 hover:underline lg:text-lg">
            {user.name}
          </Link>
          <Badge variant={badgeVariant}>
            <span className="text-xs capitalize sm:text-sm">{user.status}</span>
          </Badge>
        </div>
        <div className="flex h-8 justify-between gap-2 text-xs font-medium">
          <Button onClick={handleEditUser}>
            <span>Edit</span>
          </Button>
          <Button onClick={handleRemoveUser}>
            <span>Delete</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
