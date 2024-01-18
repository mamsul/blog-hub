import Link from 'next/link';
import HeaderLogo from './HeaderLogo';
import HeaderUser from './HeaderUser';

const Header = () => {
  return (
    <header className="fixed top-0 z-10 h-16 w-full border-b bg-[#f9f4ec]/50 backdrop-blur-sm lg:h-20 xl:h-24">
      <div className="mx-auto flex h-full w-full items-center justify-between px-4 xl:max-w-6xl xl:px-0">
        <Link href={'/'}>
          <HeaderLogo />
        </Link>
        <Link href={'/users'}>
          <HeaderUser />
        </Link>
      </div>
    </header>
  );
};

export default Header;
