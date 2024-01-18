import HeaderLogo from '@/components/Header/HeaderLogo';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white/50 backdrop-blur-sm">
      <div className="center-object h-full w-full flex-col">
        <HeaderLogo variant="loading" />
      </div>
    </div>
  );
};

export default Loading;
