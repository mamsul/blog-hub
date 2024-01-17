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
