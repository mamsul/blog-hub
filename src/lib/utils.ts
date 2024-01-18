import { AxiosError } from 'axios';
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getError = (error: unknown): string => {
  if (error instanceof AxiosError) {
    if (error?.response?.data && Array.isArray(error.response.data)) {
      return `${error.response.data[0].field} ${error.response.data[0].message}`;
    } else {
      return error.response?.data?.message || 'An error occurred with Axios.';
    }
  } else if (error instanceof Error) {
    return error.message;
  } else {
    return 'Sorry, Recource not found!';
  }
};
