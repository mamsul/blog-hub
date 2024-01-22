'use client';

import { cn } from '@/lib/utils';
import PaginateBtn from './Pagination/PaginateBtn';

type PaginationProps = {
  perPage: number;
  currentPage: number;
  totalResults: number;
  isLoading: boolean;
  onChangePaginate: (page: number) => void;
};

const Pagination = ({
  perPage,
  currentPage,
  totalResults,
  isLoading,
  onChangePaginate,
}: PaginationProps) => {
  const totalPage = Math.ceil(totalResults / perPage);

  const handlePaginate = (type: 'prev' | 'next') => {
    const nextPage = type === 'next' ? currentPage + 1 : currentPage - 1;
    onChangePaginate(nextPage);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPage, startPage + maxPagesToShow - 1);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <span
          key={i}
          onClick={() => onChangePaginate(i)}
          className={cn(
            'center-object cursor-pointer rounded-sm border border-gray-400 px-2 py-1 text-sm hover:border-gray-700 xs:px-4 xs:py-2 sm:text-base',
            currentPage === i && 'border-gray-700 bg-gray-700 text-white',
          )}>
          {i}
        </span>,
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <div className="flex h-12 w-full items-center justify-center gap-3 sm:justify-end">
        <div className="me-5 hidden sm:block">
          <span className="inline-flex items-center gap-3 text-lg font-medium">
            <span className="text-gray-500">Page</span> {currentPage}{' '}
            <span className="text-gray-500">of</span> {totalPage}
          </span>
        </div>
        <PaginateBtn
          isDisabled={currentPage === 1 || isLoading}
          type="prev"
          action={() => handlePaginate('prev')}
        />
        <div className="flex w-auto gap-2">{renderPageNumbers()}</div>
        <PaginateBtn
          isDisabled={currentPage === totalPage || isLoading}
          type="next"
          action={() => handlePaginate('next')}
        />
      </div>
      <div className="me-5 mt-3 flex justify-center sm:hidden">
        <span className="inline-flex items-center gap-3 text-lg font-medium">
          <span className="text-gray-500">Page</span> {currentPage}{' '}
          <span className="text-gray-500">of</span> {totalPage}
        </span>
      </div>
    </div>
  );
};

export default Pagination;
