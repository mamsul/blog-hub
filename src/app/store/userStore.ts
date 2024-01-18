import { getUsers } from '@/service/userService';
import { create } from 'zustand';

interface IUserStore {
  data: {
    users: IUser[];
    totalResults: string;
  };
  filteredUsers: IUser[];
  params: PaginateParams;
  loading: boolean;
  loadingSearch: boolean;

  getUsersData: () => void;
  searchUsers: (searchVal: string) => void;
  updatePagination: (nextPage: number) => void;
}

const userStore = create<IUserStore>((set, get) => ({
  data: {
    users: [],
    totalResults: '0',
  },
  filteredUsers: [],
  loading: false,
  loadingSearch: false,
  params: {
    page: 1,
    perPage: 12,
  },

  getUsersData: async () => {
    const params = get().params;
    set({
      loading: true,
      filteredUsers: [],
      data: {
        users: [],
        totalResults: '0',
      },
    });

    try {
      const res = await getUsers(params);

      set({
        data: {
          users: res.data,
          totalResults: res.totalResult as string,
        },
      });
    } catch (error) {
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  searchUsers: async (searchVal) => {
    const users = get().data.users;

    const filteredUsers = users.filter((item) =>
      item.name.toLowerCase().includes(searchVal.toLowerCase()),
    );

    set({ filteredUsers });
  },

  updatePagination: (nextPage) => {
    const params = get().params;
    set({
      params: {
        ...params,
        page: nextPage,
      },
    });
  },
}));

export { userStore };
