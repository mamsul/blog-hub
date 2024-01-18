import ApiService from './api';
const apiService = new ApiService();

export async function getPostsData(
  page: number,
  perPage: number,
): Promise<ApiResponse<IPost[]>> {
  const url = `/posts?page=${page}&per_page=${perPage}`;

  try {
    const res = await apiService.get<IPost[]>(url);

    return res;
  } catch (error) {
    throw error;
  }
}

export async function getPostDataById(postId: number): Promise<IPost> {
  try {
    const res = await apiService.get<IPost>(`/posts/${postId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function getPostDataByUser(userId: number): Promise<IPost[]> {
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
  try {
    const res = await apiService.get<IPostComment[]>(
      `/posts/${postId}/comments`,
    );
    return res.data;
  } catch (error) {
    throw error;
  }
}
