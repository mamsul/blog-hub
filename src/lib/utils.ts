import { AxiosError } from 'axios';
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getError = (error: unknown): string => {
  if (error instanceof AxiosError) {
    return error.response?.data?.message || 'An error occurred with Axios.';
  } else if (error instanceof Error) {
    return error.message;
  } else {
    return 'Sorry, Recource not found!';
  }
};
