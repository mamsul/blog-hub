import UsersContent from '@/components/User/UsersContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Users',
};

const UsersPage = () => {
  return (
    <div className="mx-auto w-full flex-col py-4 md:py-6 lg:py-10">
      <h2 className="text-lg font-bold md:text-xl lg:text-3xl">Users</h2>
      <UsersContent />
    </div>
  );
};

export default UsersPage;
