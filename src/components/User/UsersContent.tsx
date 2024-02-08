'use client';

import { useDebounce } from '@/hooks';
import { userStore } from '@/store';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Button } from '../Button';
import { FormInput } from '../Form/FormInput';
import ModalDelete from '../Modal/ModalDelete';
import Pagination from '../Pagination';
import UserList from './UserList';
import UserListShimer from './UserListShimer';

const UsersContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchValueUrl = searchParams.get('search') ?? '';

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

  const [search, setSearch] = useState<string>(searchValueUrl);
  const debounceSearch = useDebounce(search, 700);

  // Trigger fetch user when page/search changes.
  useEffect(() => {
    getUsersData(params);
  }, [params]);

  useEffect(() => {
    setUserParams({ search: searchValueUrl, page: 1 });
  }, [searchValueUrl]);

  useEffect(() => {
    debounceSearch !== ''
      ? router.push(`/users?search=${debounceSearch}`)
      : router.push('/users');
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
        <Pagination
          currentPage={params.page}
          perPage={params.perPage}
          totalResults={parseInt(data.totalResults)}
          isLoading={loading}
          onChangePaginate={(page) => setUserParams({ page })}
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
