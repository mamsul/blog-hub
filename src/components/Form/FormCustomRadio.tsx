'use client';

import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import React from 'react';

type RadioButtonProps = {
  watch: any;
  register: any;
  name: string;
  value: string;
  label: string;
};

const FormCustomRadio: React.FC<RadioButtonProps> = ({
  watch,
  register,
  name,
  value,
  label,
}) => {
  return (
    <label
      className={cn(
        'center-object h-12 w-full cursor-pointer rounded border border-gray-300 capitalize',
        watch(name) === value && 'border-2 border-black',
      )}>
      <div className="inline-flex">
        <input
          className="hidden"
          type="radio"
          value={value}
          {...register(name)}
        />
        {watch(name) === value && <Check className="me-2 h-auto w-4" />}
        {label}
      </div>
    </label>
  );
};

export default FormCustomRadio;
