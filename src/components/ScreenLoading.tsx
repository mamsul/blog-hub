import HeaderLogo from '@/components/Header/HeaderLogo';

const ScreenLoading = () => {
  return (
    <div className="fixed inset-x-0 inset-y-0 z-20 bg-[#f9f4ec]">
      <div className="center-object h-full w-full flex-col">
        <HeaderLogo variant="loading" />
      </div>
    </div>
  );
};

export default ScreenLoading;
