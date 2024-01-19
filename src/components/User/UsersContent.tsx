'use client';

import { userStore } from '@/app/store';
import { useDebounce } from '@/hooks';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Button } from '../Button';
import { FormInput } from '../Form/FormInput';
import ModalDelete from '../Modal/ModalDelete';
import UserList from './UserList';
import UserListShimer from './UserListShimer';
import UserPagination from './UserPagination';

const UsersContent = () => {
  const {
    getUsersData,
    setUserParams,
    params,
    loading,
    data,
    success,
    delete: { open, userId, loading: LoadingDelete },
    closeDeleteModal,
    deleteUSerData,
  } = userStore();
  const [search, setSearch] = useState<string>('');
  const debounceSearch = useDebounce(search, 700);

  // Trigger fetch user when page/search changes.
  useEffect(() => {
    getUsersData(params);
  }, [params]);

  useEffect(() => {
    setUserParams({ search: debounceSearch, page: 1 });
  }, [debounceSearch]);

  // Trigger success after deleting user
  useEffect(() => {
    if (success) {
      toast.success(success);
    }
  }, [success]);

  return (
    <div>
      <div className="mt-8 flex w-full justify-between gap-2">
        <FormInput
          placeholder="Search User by Name"
          className="w-full md:w-4/12"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link href={'/users/add'}>
          <Button
            variant="highlight"
            className="h-10 w-max px-2 md:px-3 lg:h-12 lg:px-5">
            <span className="inline-flex items-center text-sm font-medium md:text-base">
              <Plus className="me-1.5 h-auto w-4 md:me-3 md:w-5" /> Add User
            </span>
          </Button>
        </Link>
      </div>

      <div className="w-full pt-10">
        {loading ? <UserListShimer /> : <UserList users={data.users} />}
      </div>

      <div className="mt-10 w-full">
        <UserPagination
          currentPage={params.page}
          perPage={params.perPage}
          totalResults={parseInt(data.totalResults)}
        />
      </div>

      {open && (
        <ModalDelete
          onClose={() => closeDeleteModal()}
          onDelete={() => deleteUSerData(userId as number)}
          isLoading={LoadingDelete}
        />
      )}
    </div>
  );
};

export default UsersContent;
