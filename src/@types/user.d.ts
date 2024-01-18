interface IUser {
  id?: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

interface IUserStore {
  data: {
    users: IUser[];
    totalResults: string;
  };
  error: string | null;
  success: string | null;
  filteredUsers: IUser[];
  params: PaginateParams;
  loading: boolean;
  delete: {
    open: boolean;
    userId: number | null;
    loading: boolean;
  };

  getUsersData: () => void;
  searchUsers: (searchVal: string) => void;
  updatePagination: (nextPage: number) => void;
  createUserData: (payload: IUser) => void;
  updateUserData: (userid: number, payload: IUser) => void;
  deleteUSerData: (userid: number) => void;
  openDeleteModal: (userId: number) => void;
  closeDeleteModal: () => void;
  resetSuccess: () => void;
}
