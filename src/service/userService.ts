import { notFound } from 'next/navigation';
import ApiService from './api';
const apiService = new ApiService();

export async function getUsers(
  params?: PaginateParams,
): Promise<ApiResponse<IUser[]>> {
  const url = params
    ? `/users?page=${params.page}&per_page=${params.perPage}`
    : '/users';

  try {
    const res = await apiService.get<IUser[]>(url);
    return res;
  } catch (error) {
    throw error;
  }
}

export async function getUserById(userId: number): Promise<IUser> {
  try {
    const res = await apiService.get<IUser>(`/users/${userId}`);
    return res.data;
  } catch (error) {
    return notFound();
  }
}

export async function createUser(payload: IUser): Promise<ApiResponse<IUser>> {
  try {
    const res = await apiService.post<IUser, IUser>('/users', payload);
    return res;
  } catch (error) {
    throw error;
  }
}

export async function updateUser(
  userId: number,
  payload: IUser,
): Promise<ApiResponse<IUser>> {
  try {
    const res = await apiService.update<IUser, IUser>(
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
