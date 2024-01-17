import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'highlight' | 'disabled';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = 'default', ...props }, ref) => {
    const styleVariant = {
      disabled: 'border border-gray-300',
      default: 'border border-gray-400 hover:border-gray-700',
      highlight: 'bg-gray-800 text-white',
    };

    return (
      <button
        className={cn(
          'inline-flex h-full w-full items-center justify-center rounded transition-all duration-300',
          styleVariant[variant],
          className,
        )}
        {...props}
        ref={ref}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
