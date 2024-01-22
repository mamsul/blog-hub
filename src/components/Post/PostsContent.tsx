'use client';

import { postStore } from '@/store';
import { useEffect } from 'react';
import Pagination from '../Pagination';
import PostList from './PostList';
import PostListShimer from './PostListShimer';

const PostsContent = () => {
  const { loading, data, getPostsData, params, setPostParams } = postStore();

  useEffect(() => {
    getPostsData(params);
  }, [params]);

  return (
    <div>
      {loading ? <PostListShimer /> : <PostList posts={data.posts} />}

      <div className="mt-10 w-full">
        <Pagination
          currentPage={params.page}
          perPage={params.perPage}
          totalResults={parseInt(data.totalResults)}
          isLoading={loading}
          onChangePaginate={(page) => setPostParams({ page })}
        />
      </div>
    </div>
  );
};

export default PostsContent;
