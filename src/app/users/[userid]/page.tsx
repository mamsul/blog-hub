import Breadcrumbs from '@/components/Breadcrumbs';
import PostList from '@/components/Post/PostList';
import UserAbout from '@/components/User/UserAbout';
import UserBox from '@/components/UserBox';
import { PostsDummy } from '@/lib/data';

type UserDetailPageProps = {
  params: {
    userid: string;
  };
};

const UserDetailPage = ({ params }: UserDetailPageProps) => {
  const userId = params.userid;
  console.log({ userId });

  return (
    <div className="mx-auto w-full flex-col py-4 md:py-6 lg:py-10">
      <Breadcrumbs data={['Users', 'Detail']} />

      <div className="mx-auto mt-10 max-w-3xl rounded-lg bg-[#EBD9B4]/30 p-5 md:p-8">
        <div className="flex h-auto w-full flex-col items-center justify-center gap-5 md:flex-row">
          <UserBox className="h-16 w-16 md:h-44 md:w-44 lg:h-44 lg:w-44" />
          <UserAbout />
        </div>
      </div>

      <div className="mt-10 border-t pt-5">
        <h3 className="mb-10 text-xl font-semibold underline underline-offset-4 md:text-2xl">
          User Posts (10)
        </h3>
        <PostList posts={PostsDummy} />
      </div>
    </div>
  );
};

export default UserDetailPage;
