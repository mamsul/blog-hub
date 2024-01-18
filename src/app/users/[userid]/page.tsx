import Breadcrumbs from '@/components/Breadcrumbs';
import UserDetailContent from '@/components/User/UserDetailContent';
import { getPostDataByUser } from '@/service/postService';
import { getUserById } from '@/service/userService';

type UserDetailPageProps = {
  params: {
    userid: number;
  };
};

const UserDetailPage = async ({ params }: UserDetailPageProps) => {
  const userId = params.userid;
  const user = await getUserById(userId);
  const userPosts = await getPostDataByUser(userId);

  return (
    <div className="mx-auto w-full flex-col py-4 md:py-6 lg:py-10">
      <Breadcrumbs data={['Users', 'Detail']} />

      <UserDetailContent posts={userPosts} user={user} />
    </div>
  );
};

export default UserDetailPage;
