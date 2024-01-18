import { cn } from '@/lib/utils';
import { Feather } from 'lucide-react';

type HeaderLogoProps = {
  variant?: 'default' | 'loading';
};

const HeaderLogo = ({ variant = 'default' }: HeaderLogoProps) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className={cn(
          'center-object rounded-full border border-gray-500 p-1.5',
          variant == 'default' ? 'h-8 w-8 ' : 'h-12 w-12',
        )}>
        <Feather className="h-full w-auto text-orange-600" />
      </div>
      <h1
        className={cn(
          'items-center font-sans font-bold text-orange-600 ',
          variant == 'default'
            ? 'text-xl lg:text-2xl'
            : 'ms-3 text-xl md:text-2xl lg:text-5xl',
        )}>
        BlogHub.
      </h1>
    </div>
  );
};

export default HeaderLogo;
