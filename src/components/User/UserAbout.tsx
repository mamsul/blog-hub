import Badge from '../Badge';

type UserAboutProps = {
  user: IUser;
};

const UserData = ({
  label,
  value,
  badge,
}: {
  label: string;
  value: string;
  badge?: boolean;
}) => (
  <div className="flex items-center gap-2">
    <span className="w-2/12 text-gray-500">{label}</span>
    <span>:</span>
    {badge ? (
      <Badge variant={value === 'active' ? 'success' : 'danger'}>
        <span className="text-sm lg:text-base">{value}</span>
      </Badge>
    ) : (
      <span className="w-8/12">{value}</span>
    )}
  </div>
);

const UserAbout = ({ user }: UserAboutProps) => {
  return (
    <div className="flex w-full flex-col gap-3.5 text-base lg:text-lg">
      <UserData label="Name" value={user.name} />
      <UserData label="Email" value={user.email} />
      <UserData label="Gender" value={user.gender} />
      <UserData label="Status" value={user.status} badge />
    </div>
  );
};

export default UserAbout;
