import PostList from '@/components/Post/PostList';
import PostListShimer from '@/components/Post/PostListShimer';
import PostPagination from '@/components/Post/PostPagination';
import { getPostsData } from '@/service/postService';
import { Suspense } from 'react';

type HomeProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const PostsContent = async ({ page }: { page: number }) => {
  const perPage: number = 9;
  const result = await getPostsData(page, perPage);
  const totalResults = parseInt(result.totalResult ?? '0');

  return (
    <>
      <PostList posts={result.data} />
      {result.data.length > 0 && (
        <div className="mt-10 flex h-12 w-full items-center justify-end">
          <PostPagination
            currentPage={page}
            perPage={perPage}
            totalResults={totalResults}
          />
        </div>
      )}
    </>
  );
};

export default async function Home({ searchParams }: HomeProps) {
  const pageParams = searchParams?.page as string;
  const currentPage = pageParams ?? '1';

  return (
    <div className="h-max w-full py-4 md:py-6 lg:py-10">
      <Suspense fallback={<PostListShimer />}>
        <PostsContent page={parseInt(currentPage)} />
      </Suspense>
    </div>
  );
}
