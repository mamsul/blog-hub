import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="mx-auto mt-20 flex w-full flex-col items-center justify-center space-y-4 xs:w-3/5">
      <h2 className="animate-bounce text-5xl font-bold md:text-7xl lg:text-9xl">
        404
      </h2>
      <p className="text-center text-lg font-semibold capitalize xs:text-xl md:text-2xl lg:text-5xl">
        Sorry, there is nothing to see here
      </p>

      <Link
        href={'/'}
        className="w-max border-none pt-10 text-start text-base underline underline-offset-4 md:text-xl">
        Back to Safety Place
      </Link>
    </div>
  );
};

export default NotFound;
