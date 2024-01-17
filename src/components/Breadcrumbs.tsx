import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import React from 'react';

type BreadcrumbsProps = {
  className?: string;
  data: string[];
};

const Breadcrumbs = ({ data, className }: BreadcrumbsProps) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {data?.map((crumb, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <ChevronRight className="text-gray-400" />}
          <h2
            className={cn(
              'text-lg font-bold tracking-normal md:text-xl lg:text-3xl',
              index === data.length - 1 ? 'text-gray-800' : 'text-gray-500',
            )}>
            {crumb}
          </h2>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
