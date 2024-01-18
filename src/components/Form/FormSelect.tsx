import { cn } from '@/lib/utils';
import React from 'react';

export interface FormSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  options: string[];
}

const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ className, options, ...props }, ref) => {
    return (
      <select
        ref={ref}
        {...props}
        className={cn(
          'h-10 w-full rounded border border-gray-400 bg-transparent px-4 text-sm outline-none transition-all duration-300 focus:border-gray-700 sm:text-base lg:h-12',
          className,
        )}>
        {options.map((item) => (
          <option key={item} value={item} className="capitalize">
            {item}
          </option>
        ))}
      </select>
    );
  },
);

FormSelect.displayName = 'FormSelect';

export { FormSelect };
