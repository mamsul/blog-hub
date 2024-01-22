import Breadcrumbs from '@/components/Breadcrumbs';
import PostList from '@/components/Post/PostList';
import UserAbout from '@/components/User/UserAbout';
import UserBox from '@/components/UserBox';
import { getPostByUser } from '@/service/postService';
import { getUserById } from '@/service/userService';
import { NotebookPen } from 'lucide-react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'User Detail',
};

type UserDetailPageProps = {
  params: {
    userid: number;
  };
};

const UserDetailPage = async ({ params }: UserDetailPageProps) => {
  const userId = params.userid;
  const userData = getUserById(userId);
  const userPostsData = getPostByUser(userId);

  const [user, posts] = await Promise.all([userData, userPostsData]);

  if (user.error) {
    return notFound();
  }

  return (
    <div className="mx-auto w-full flex-col py-4 md:py-6 lg:py-10">
      <Breadcrumbs data={['Users', 'Detail']} />

      <div className="mx-auto mt-10 max-w-3xl rounded-lg bg-[#EBD9B4]/30 p-5 md:p-8">
        <div className="flex h-auto w-full flex-col items-center justify-center gap-5 md:flex-row">
          <UserBox className="h-16 w-16 md:h-44 md:w-44 lg:h-44 lg:w-44" />
          <UserAbout user={user.data as IUser} />
        </div>
      </div>

      <div className="mt-10 border-t pt-5">
        <h3 className="mb-10 inline-flex items-center gap-3 text-xl font-semibold md:text-2xl">
          <NotebookPen /> User Posts ({posts?.length ?? 0})
        </h3>
        {posts && posts.length > 0 && <PostList posts={posts} />}
      </div>
    </div>
  );
};

export default UserDetailPage;
