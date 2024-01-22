'use client';

import { useRouter } from 'next/navigation';
import PaginateBtn from '../Pagination/PaginateBtn';

type PostPaginationProps = {
  perPage: number;
  currentPage: number;
  totalResults: number;
};

const PostPagination = ({
  perPage,
  currentPage,
  totalResults,
}: PostPaginationProps) => {
  const router = useRouter();
  const maxPage = Math.ceil(totalResults / perPage);

  const handlePaginate = (type: 'prev' | 'next') => {
    const nextPage = type === 'next' ? currentPage + 1 : currentPage - 1;
    const path = nextPage === 1 ? '/' : `?page=${nextPage}`;
    router.push(path);
  };

  return (
    <div className="flex h-full w-max gap-3">
      <PaginateBtn
        isDisabled={currentPage === 1}
        type="prev"
        action={() => handlePaginate('prev')}
      />
      <PaginateBtn
        isDisabled={currentPage === maxPage}
        type="next"
        action={() => handlePaginate('next')}
      />
    </div>
  );
};

export default PostPagination;
