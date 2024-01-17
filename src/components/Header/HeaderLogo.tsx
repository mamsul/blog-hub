import { Feather } from 'lucide-react';

const HeaderLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="center-object h-8 w-8 rounded-full border border-gray-500 p-1.5">
        <Feather className="h-full w-auto text-orange-600" />
      </div>
      <h1 className="items-center font-sans text-xl font-bold text-orange-600 lg:text-2xl">
        BlogHub.
      </h1>
    </div>
  );
};

export default HeaderLogo;
