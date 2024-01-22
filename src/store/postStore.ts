import { getPosts } from '@/service/postService';
import { create } from 'zustand';

const postStore = create<IPostStore>((set, get) => ({
  params: {
    page: 1,
    perPage: 9,
  },
  data: {
    posts: [],
    totalResults: '0',
  },
  loading: false,

  setPostParams: (newProps) => {
    set({ params: { ...get().params, ...newProps } });
  },

  getPostsData: async ({ page, perPage }) => {
    set({
      loading: true,
      data: {
        ...get().data,
        posts: [],
      },
    });

    try {
      const res = await getPosts(page, perPage);
      set({
        data: {
          posts: res.data,
          totalResults: res.totalResult as string,
        },
      });
    } catch (error) {
      throw error;
    } finally {
      set({ loading: false });
    }
  },
}));

export { postStore };
