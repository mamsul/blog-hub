import { NotebookPen } from 'lucide-react';
import PostList from '../Post/PostList';
import UserBox from '../UserBox';
import UserAbout from './UserAbout';

type UserDetailContentProps = {
  user: IUser;
  posts: IPost[];
};

const UserDetailContent = ({ posts, user }: UserDetailContentProps) => {
  return (
    <>
      <div className="mx-auto mt-10 max-w-3xl rounded-lg bg-[#EBD9B4]/30 p-5 md:p-8">
        <div className="flex h-auto w-full flex-col items-center justify-center gap-5 md:flex-row">
          <UserBox className="h-16 w-16 md:h-44 md:w-44 lg:h-44 lg:w-44" />
          <UserAbout user={user} />
        </div>
      </div>

      <div className="mt-10 border-t pt-5">
        <h3 className="mb-10 inline-flex items-center gap-3 text-xl font-semibold md:text-2xl">
          <NotebookPen /> User Posts ({posts?.length ?? 0})
        </h3>
        {posts && posts.length > 0 && <PostList posts={posts} />}
      </div>
    </>
  );
};

export default UserDetailContent;
