import PostList from '@/components/Post/PostList';
import PostPagination from '@/components/Post/PostPagination';
import { getPostsData } from '@/service/postService';

type HomeProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Home({ searchParams }: HomeProps) {
  const pageParams = searchParams?.page as string;
  const currentPage = pageParams ?? '1';
  const perPage: number = 9;

  const result = await getPostsData(parseInt(currentPage), perPage);
  const totalResults = parseInt(result.totalResult ?? '0');

  return (
    <div className="h-max w-full py-4 md:py-6 lg:py-10">
      <PostList posts={result.data} />
      {result.data.length > 0 && (
        <div className="mt-10 flex h-12 w-full items-center justify-end">
          <PostPagination
            currentPage={parseInt(currentPage)}
            perPage={perPage}
            totalResults={totalResults}
          />
        </div>
      )}
    </div>
  );
}
