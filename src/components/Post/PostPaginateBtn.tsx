import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { Button } from '../Button';

type PostPaginateBtnProps = {
  isDisabled?: boolean;
  type: 'prev' | 'next';
};

const PostPaginateBtn = ({
  isDisabled = false,
  type,
}: PostPaginateBtnProps) => {
  const iconStyle = isDisabled ? 'text-gray-500' : 'text-gray-700';
  const ariaLabel = type === 'prev' ? 'Previous Page' : 'Next Page';

  const getIconType = () => {
    if (type === 'prev') {
      return <ArrowLeftIcon className={iconStyle} />;
    }
    return <ArrowRightIcon className={iconStyle} />;
  };

  return (
    <Button
      disabled={isDisabled}
      variant={isDisabled ? 'disabled' : 'default'}
      aria-label={ariaLabel}
      className="h-10 w-10 md:h-12 md:w-12">
      {getIconType()}
    </Button>
  );
};

export default PostPaginateBtn;
