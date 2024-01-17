import { cn } from '@/lib/utils';
import React from 'react';

type BadgeProps = {
  variant: BadgeVariant;
  children: React.ReactNode;
};

const Badge = ({ variant, children }: BadgeProps) => {
  const color = {
    success: 'bg-green-50 text-green-700 ring-green-600/20',
    danger: 'bg-red-50 text-red-700 ring-red-600/10',
    info: 'bg-blue-50 text-blue-700 ring-red-700/10',
    warning: 'bg-yellow-50 text-yellow-700 ring-yellow-600/20',
  };

  return (
    <span
      className={cn(
        'inline-flex w-max items-center rounded-md px-4 py-1 font-medium ring-1 ring-inset',
        color[variant] as BadgeVariant,
      )}>
      {children}
    </span>
  );
};

export default Badge;
