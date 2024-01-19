interface IUser {
  id?: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

interface IUserParam {
  search?: string;
  page: number;
  perPage: number;
}

interface IUserStore {
  data: {
    users: IUser[];
    totalResults: string;
  };
  error: string | null;
  success: string | null;
  filteredUsers: IUser[];
  params: IUserParam;
  loading: boolean;
  delete: {
    open: boolean;
    userId: number | null;
    loading: boolean;
  };

  getUsersData: ({ page, perPage, search }: IUserParam) => void;
  setUserParams: (props: Partial<IUserParam>) => void;
  createUserData: (payload: IUser) => void;
  updateUserData: (userid: number, payload: IUser) => void;
  deleteUSerData: (userid: number) => void;
  openDeleteModal: (userId: number) => void;
  closeDeleteModal: () => void;
  resetSuccess: () => void;
}
