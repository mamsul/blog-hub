'use client';

import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type FormSelectProps = {
  options: string[];
  value: string;
  placeholder: string;
};

const FormSelect = ({ options, value, placeholder }: FormSelectProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outsideClick = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', outsideClick);
    return () => {
      document.removeEventListener('mousedown', outsideClick);
    };
  }, []);

  return (
    <div ref={selectRef} className="relative">
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="flex h-10 w-full items-center justify-start rounded border border-gray-400 bg-transparent px-4 outline-none transition-all duration-300 focus:border-gray-700 lg:h-12">
          <span
            className={cn(
              'text-sm sm:text-base',
              value == '' && 'text-gray-400',
            )}>
            {value || placeholder}
          </span>
        </button>
        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 transform text-gray-500" />
      </div>

      {open && (
        <ul className="absolute inset-x-0 top-12 flex flex-col gap-2 rounded border border-gray-400 bg-[#f9f4ec] p-2 lg:top-14">
          {options.map((option, idx) => (
            <li key={`opt-${idx}`}>
              <button
                type="button"
                className="w-full text-start text-sm sm:text-base">
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FormSelect;
