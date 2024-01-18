'use client';

import { userStore } from '@/app/store';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '../Button';
import { FormInput } from '../Form/FormInput';
import UserList from './UserList';
import UserListShimer from './UserListShimer';
import UserPagination from './UserPagination';

const UsersContent = () => {
  const { getUsersData, params, loading, data, searchUsers, filteredUsers } =
    userStore();
  const [searchName, setSearchName] = useState<string>('');
  const emptySearch = searchName === '';

  const users =
    !emptySearch || filteredUsers.length > 0 ? filteredUsers : data.users;

  useEffect(() => {
    setSearchName('');
    getUsersData();
  }, [params]);

  useEffect(() => {
    if (!emptySearch) {
      searchUsers(searchName);
    }
  }, [searchName]);

  return (
    <div>
      <div className="mt-8 flex w-full justify-between gap-2">
        <FormInput
          placeholder="Search User by Name"
          className="w-full md:w-4/12"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
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
        {loading ? <UserListShimer /> : <UserList users={users} />}
      </div>

      <div className="mt-10 w-full">
        <UserPagination
          currentPage={params.page}
          perPage={params.perPage}
          totalResults={parseInt(data.totalResults)}
        />
      </div>
    </div>
  );
};

export default UsersContent;
