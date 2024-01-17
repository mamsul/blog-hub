import Breadcrumbs from '@/components/Breadcrumbs';
import UserForm from '@/components/User/UserForm';

const AddUserPage = () => {
  return (
    <div className="mx-auto w-full flex-col py-4 md:py-6 lg:py-10">
      <Breadcrumbs data={['Users', 'Add User']} />

      <div className="mx-auto mt-10 max-w-2xl">
        <span className="mb-8 block text-2xl font-bold tracking-wide md:text-3xl xl:text-5xl">
          Chill, and fill out this User Form!
        </span>

        <UserForm />
      </div>
    </div>
  );
};

export default AddUserPage;
