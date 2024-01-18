import ApiService from './api';
const apiService = new ApiService();

export async function getUsers(
  page: number,
  perPage: number,
): Promise<ApiResponse<IUser[]>> {
  const url = `/users?page=${page}&per_page=${perPage}`;

  try {
    const res = await apiService.get<IUser[]>(url);
    return res;
  } catch (error) {
    throw error;
  }
}

export async function createUser(payload: IUser): Promise<ApiResponse<any>> {
  try {
    const res = await apiService.post<any, IUser>('/users', payload);
    return res;
  } catch (error) {
    throw error;
  }
}

export async function updateUser(
  userId: number,
  payload: IUser,
): Promise<ApiResponse<any>> {
  try {
    const res = await apiService.update<any, IUser>(
      `/users/${userId}`,
      payload,
    );
    return res;
  } catch (error) {
    throw error;
  }
}

export async function deleteUser(userId: number): Promise<ApiResponse<any>> {
  try {
    const res = await apiService.delete<any>(`/users/${userId}`);
    return res;
  } catch (error) {
    throw error;
  }
}
