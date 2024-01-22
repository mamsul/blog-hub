import PostsContent from '@/components/Post/PostsContent';

export default async function Home() {
  return (
    <div className="h-max w-full py-4 md:py-6 lg:py-10">
      <PostsContent />
    </div>
  );
}
