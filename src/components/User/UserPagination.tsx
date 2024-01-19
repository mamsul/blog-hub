'use client';

import { userStore } from '@/app/store';
import PaginateBtn from '../PaginateBtn';

type UserPaginationProps = {
  perPage: number;
  currentPage: number;
  totalResults: number;
};

const UserPagination = ({
  perPage,
  currentPage,
  totalResults,
}: UserPaginationProps) => {
  const { setUserParams, loading } = userStore();
  const maxPage = Math.ceil(totalResults / perPage);

  const handlePaginate = (type: 'prev' | 'next') => {
    const nextPage = type === 'next' ? currentPage + 1 : currentPage - 1;
    setUserParams({ page: nextPage });
  };

  return (
    <div className="flex h-12 w-full items-center justify-end gap-3">
      <div className="me-5">
        <span className="inline-flex items-center gap-3 text-lg font-medium">
          <span className="text-gray-500">Page</span> {currentPage}{' '}
          <span className="text-gray-500">of</span> {maxPage}
        </span>
      </div>
      <PaginateBtn
        isDisabled={currentPage === 1 || loading}
        type="prev"
        action={() => handlePaginate('prev')}
      />
      <PaginateBtn
        isDisabled={currentPage === maxPage || loading}
        type="next"
        action={() => handlePaginate('next')}
      />
    </div>
  );
};

export default UserPagination;
