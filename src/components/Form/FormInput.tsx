import { cn } from '@/lib/utils';
import React from 'react';

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const FormInput = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ type, className, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'h-10 w-full rounded border border-gray-400 bg-transparent px-4 text-sm outline-none transition-all duration-300 focus:border-gray-700 sm:text-base lg:h-12',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

FormInput.displayName = 'FormInput';

export { FormInput };
