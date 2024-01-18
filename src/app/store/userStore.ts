import { getError } from '@/lib/utils';
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from '@/service/userService';
import { create } from 'zustand';

const userStore = create<IUserStore>((set, get) => ({
  data: {
    users: [],
    totalResults: '0',
  },
  filteredUsers: [],
  loading: false,
  loadingDelete: false,
  error: null,
  success: null,
  params: {
    page: 1,
    perPage: 12,
  },
  delete: {
    open: false,
    userId: null,
    loading: false,
  },

  getUsersData: async () => {
    const params = get().params;
    set({
      loading: true,
      filteredUsers: [],
      data: {
        ...get().data,
        users: [],
      },
    });

    try {
      const res = await getUsers(params);
      set({
        filteredUsers: res.data,
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

    if (searchVal === '' || !searchVal) {
      set({ filteredUsers: users });
    } else {
      const filteredUsers = users.filter((item) =>
        item.name.toLowerCase().includes(searchVal.toLowerCase()),
      );
      set({ filteredUsers });
    }
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

  createUserData: async (payload) => {
    set({ loading: true, error: null, success: null });

    try {
      const res = await createUser(payload);
      set({ success: `${res.data.name}, successfully added!` });
      get().resetSuccess();
    } catch (error) {
      const errMessage = getError(error);
      set({ error: errMessage });
    } finally {
      set({ loading: false });
    }
  },

  updateUserData: async (userid, payload) => {
    set({ loading: true, error: null, success: null });

    try {
      await updateUser(userid, payload);
      set({ success: 'User has been updated successfully!' });
      get().resetSuccess();
    } catch (error) {
      const errMessage = getError(error);
      set({ error: errMessage });
    } finally {
      set({ loading: false });
    }
  },

  deleteUSerData: async (userid) => {
    set({ delete: { ...get().delete, loading: true } });

    try {
      await deleteUser(userid);
      set({ success: 'User has been deleted successfully!' });
      get().resetSuccess();
      set({
        params: {
          ...get().params,
          page: 1,
        },
      });
    } catch (error) {
      const errMessage = getError(error);
      set({ error: errMessage });
    } finally {
      get().closeDeleteModal();
    }
  },

  openDeleteModal: (userId) => {
    set({ delete: { ...get().delete, open: true, userId } });
  },

  closeDeleteModal: () => {
    set({ delete: { open: false, userId: null, loading: false } });
  },

  resetSuccess: () => {
    setTimeout(() => {
      set({ success: null });
    }, 1000);
  },
}));

export { userStore };
