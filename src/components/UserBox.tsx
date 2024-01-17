import { cn } from '@/lib/utils';
import { User } from 'lucide-react';

type UserBoxProps = {
  className?: string;
};

const UserBox = ({ className }: UserBoxProps) => {
  return (
    <div
      className={cn(
        'center-object h-7 w-7 rounded-md border border-gray-300 p-1 lg:h-10 lg:w-10',
        className,
      )}>
      <User className="h-full w-full" />
    </div>
  );
};

export default UserBox;
