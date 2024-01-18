import UserItem from './UserItem';

type UserListProps = {
  users: IUser[];
};

const UserList = ({ users }: UserListProps) => {
  return (
    <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
      {users?.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UserList;
