interface IPost {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

interface IPostComment {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
}

interface IPostParam {
  page: number;
  perPage: number;
}

interface IPostStore {
  data: {
    posts: IPost[];
    totalResults: string;
  };
  params: IPostParam;
  loading: boolean;
  setPostParams: (props: Partial<IPostParam>) => void;
  getPostsData: ({ page: number, perPage: number }) => void;
}
