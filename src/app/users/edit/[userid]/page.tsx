import Breadcrumbs from '@/components/Breadcrumbs';
import UserForm from '@/components/User/UserForm';
import { getUserById } from '@/service/userService';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit User',
};

type EditUserPageProps = {
  params: {
    userid: number;
  };
};

const EditUserPage = async ({ params: { userid } }: EditUserPageProps) => {
  const user = await getUserById(userid);

  return (
    <div className="mx-auto w-full flex-col py-4 md:py-6 lg:py-10">
      <Breadcrumbs data={['Users', 'Edit User']} />

      <div className="mx-auto mt-10 max-w-2xl">
        <span className="mb-8 block text-2xl font-bold tracking-wide md:text-3xl xl:text-5xl">
          Chill, and check what you want to change!
        </span>

        <UserForm user={user.data} />
      </div>
    </div>
  );
};

export default EditUserPage;
