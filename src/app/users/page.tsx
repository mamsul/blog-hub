import { Button } from '@/components/Button';
import { FormInput } from '@/components/Form/FormInput';
import PostPagination from '@/components/Post/PostPagination';
import UserList from '@/components/User/UserList';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const UsersPage = () => {
  return (
    <div className="mx-auto w-full flex-col py-4 md:py-6 lg:py-10">
      <h2 className="text-lg font-bold md:text-xl lg:text-3xl">Users</h2>
      <div className="mt-8 flex w-full justify-between gap-2">
        <FormInput placeholder="Search User" className="w-full md:w-4/12" />
        <Link href={'/users/add'}>
          <Button
            variant="highlight"
            className="h-10 w-max px-2 md:px-3 lg:h-12">
            <span className="inline-flex items-center text-sm font-medium md:text-base">
              <Plus className="me-1.5 h-auto w-4 md:me-3 md:w-5" /> Add User
            </span>
          </Button>
        </Link>
      </div>

      <div className="w-full pt-10">
        <UserList />
      </div>

      <div className="mt-10 flex h-12 w-full justify-end">
        <PostPagination currentPage={1} perPage={9} totalResults={0} />
      </div>
    </div>
  );
};

export default UsersPage;
