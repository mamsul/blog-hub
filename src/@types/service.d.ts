type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface IParams {
  [key: string]: any;
}

interface ApiResponse<T> {
  data: T;
  totalResult?: string;
}
