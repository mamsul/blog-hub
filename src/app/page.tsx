import PostList from '@/components/Post/PostList';
import PostPagination from '@/components/Post/PostPagination';

export default function Home() {
  return (
    <div className="h-max w-full py-4 md:py-6 lg:py-10">
      <PostList />

      <div className="mt-10 flex h-12 w-full items-center justify-end">
        <PostPagination />
      </div>
    </div>
  );
}
