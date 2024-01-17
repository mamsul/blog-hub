import PostCommentList from '@/components/Post/PostCommentList';
import UserBox from '@/components/UserBox';
import { MessageSquare } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Post Detail | Blog Hub.',
  description: 'Post Detail Description',
};

type PostDetailPageProps = {
  params: {
    postid: number;
  };
};

const PostDetailPage = ({ params }: PostDetailPageProps) => {
  const postId: number = params.postid;

  console.log({ postId });

  return (
    <div className="center-object mx-auto w-full max-w-3xl flex-col gap-6 py-6 lg:gap-10 lg:py-10">
      <h2 className="text-center text-2xl font-semibold md:max-w-2xl lg:text-5xl">
        Temeritas tardus omnis nam quia conspergo confero.
      </h2>
      <div className="flex items-center gap-3">
        <UserBox />
        <Link href={`/users/user-123`}>
          <span className="font-sans text-sm text-orange-600 md:text-base lg:text-lg">
            Imam Sulthoni
          </span>
        </Link>
      </div>

      <div className="border-t pt-6 lg:pt-10">
        <p className="text-sm tracking-wide md:text-base lg:text-lg">
          Itaque stella cur. Curvus claustrum saepe. Baiulus compono suppono.
          Thorax sortitus baiulus. Crustulum capto statim. Carmen sodalitas
          nemo. Adeptio deripio trans. Ceno synagoga suppono. Vereor cohibeo
          tabgo. Suscipit id certo. Harum tempore tactus. Iusto verto adiuvo.
          Canto tamisium acidus. Delectatio virgo et. Aetas tenax aveho. Ultra
          adstringo aequitas. Summopere acies trado. Autem auxilium voluptate.
        </p>
      </div>

      <div className="flex w-full flex-col space-y-5 pt-10">
        <h3 className="inline-flex items-center text-base font-semibold tracking-wide md:text-lg">
          <MessageSquare className="me-3 h-4 w-auto md:h-5" />
          Responses (2)
        </h3>

        <div className="border-t pt-5">
          <PostCommentList />
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;
