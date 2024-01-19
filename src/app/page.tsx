import PostList from '@/components/Post/PostList';
import PostPagination from '@/components/Post/PostPagination';
import { getPosts } from '@/service/postService';

type HomeProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const PER_PAGE = '9';

export default async function Home({ searchParams }: HomeProps) {
  const pageParams = searchParams?.page as string;
  const currentPage = pageParams ?? '1';

  const result = await getPosts(currentPage, PER_PAGE);
  const totalResults = parseInt(result.totalResult ?? '0');

  return (
    <div className="h-max w-full py-4 md:py-6 lg:py-10">
      <PostList posts={result.data} />
      {result.data.length > 0 && (
        <div className="mt-10 flex h-12 w-full items-center justify-end">
          <PostPagination
            currentPage={parseInt(currentPage)}
            perPage={parseInt(PER_PAGE)}
            totalResults={totalResults}
          />
        </div>
      )}
    </div>
  );
}
