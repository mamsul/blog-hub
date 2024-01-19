import { notFound } from 'next/navigation';
import ApiService from './api';

export const getPosts = async (
  page: string,
  perPage: string,
): Promise<ApiResponse<IPost[]>> => {
  const baseURL = 'https://gorest.co.in/public/v2';
  try {
    const url = `${baseURL}/posts?page=${page}&per_page=${perPage}`;

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const jsonData = await res.json();
      const totalResult = res.headers.get('x-pagination-total');
      return {
        data: jsonData,
        totalResult: totalResult ? totalResult : '0',
      };
    } catch (error) {
      throw error;
    }
  } catch (error) {
    throw error;
  }
};

export async function getPostById(postId: number): Promise<IPost> {
  const apiService = new ApiService();

  try {
    const res = await apiService.get<IPost>(`/posts/${postId}`);
    return res.data;
  } catch (error) {
    return notFound();
  }
}

export async function getPostByUser(userId: number): Promise<IPost[]> {
  const apiService = new ApiService();

  try {
    const res = await apiService.get<IPost[]>(`/users/${userId}/posts`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function getPostCommentById(
  postId: number,
): Promise<IPostComment[]> {
  const apiService = new ApiService();

  try {
    const res = await apiService.get<IPostComment[]>(
      `/posts/${postId}/comments`,
    );
    return res.data;
  } catch (error) {
    throw error;
  }
}
