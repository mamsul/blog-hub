type PostUserProps = {
  username: string;
};

const PostUser = ({ username }: PostUserProps) => {
  return (
    <span className="font-sans text-sm text-orange-600 md:text-base lg:text-lg">
      {username}
    </span>
  );
};

export default PostUser;
