import axios, {
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

class ApiService {
  private http: AxiosInstance;
  private baseURL = 'https://gorest.co.in/public/v2';

  constructor() {
    this.http = axios.create({
      baseURL: this.baseURL,
      withCredentials: false,
      headers: this.setupHeaders(),
    });
  }

  // Get authorization token for requests
  private get getAuthorization() {
    const accessToken =
      '114e16bc6ccdb34a56b0a7a0a8c4c1876ff79667a2d8f60c10e41fbfef478149';
    return accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
  }

  // Set up request headers
  private setupHeaders(hasAttachment = false) {
    return hasAttachment
      ? { 'Content-Type': 'multipart/form-data', ...this.getAuthorization }
      : { 'Content-Type': 'application/json', ...this.getAuthorization };
  }

  // Handle HTTP requests
  private async request<T>(
    method: HttpMethod,
    url: string,
    options: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this.http.request<T>({
        method,
        url,
        ...options,
      });

      const resHeader = response.headers as AxiosHeaders;

      return {
        data: response.data,
        totalResult: resHeader['x-pagination-total'],
      };
    } catch (error) {
      return this.normalizeError(error);
    }
  }

  //  GET request
  public async get<T>(
    url: string,
    params?: IParams,
    hasAttachment = false,
  ): Promise<ApiResponse<T>> {
    return this.request<T>('GET', url, {
      params,
      headers: this.setupHeaders(hasAttachment),
    });
  }

  //  POST request
  public async post<T, P>(
    url: string,
    payload: P,
    params?: IParams,
    hasAttachment = false,
  ): Promise<ApiResponse<T>> {
    return this.request<T>('POST', url, {
      params,
      data: payload,
      headers: this.setupHeaders(hasAttachment),
    });
  }

  //  PUT request
  public async update<T, P>(
    url: string,
    payload: P,
    params?: IParams,
    hasAttachment = false,
  ): Promise<ApiResponse<T>> {
    return this.request<T>('PUT', url, {
      params,
      data: payload,
      headers: this.setupHeaders(hasAttachment),
    });
  }

  // DELETE request
  public async delete<T>(
    url: string,
    params?: IParams,
    hasAttachment = false,
  ): Promise<ApiResponse<T>> {
    return this.request<T>('DELETE', url, {
      params,
      headers: this.setupHeaders(hasAttachment),
    });
  }

  // Normalize errors
  private normalizeError(error: any) {
    return Promise.reject(error);
  }
}

export default ApiService;
