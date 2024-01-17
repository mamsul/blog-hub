import Badge from '../Badge';

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
      <Badge variant="success">
        <span className="text-sm lg:text-base">{value}</span>
      </Badge>
    ) : (
      <span className="w-8/12">{value}</span>
    )}
  </div>
);

const UserAbout = () => {
  return (
    <div className="flex w-full flex-col gap-3.5 text-base lg:text-lg">
      <UserData label="Name" value="Imam Sulthoni" />
      <UserData label="Email" value="imamsul@gmail.com" />
      <UserData label="Gender" value="Male" />
      <UserData label="Status" value="Active" badge />
    </div>
  );
};

export default UserAbout;
