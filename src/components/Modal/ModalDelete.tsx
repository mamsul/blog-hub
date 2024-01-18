'use client';

import { Button } from '../Button';

type ModalDeleteProps = {
  isLoading: boolean;
  onClose: () => void;
  onDelete: () => void;
};

const ModalDelete = ({
  onClose,
  onDelete,
  isLoading = false,
}: ModalDeleteProps) => {
  return (
    <div className="fixed inset-0  z-20 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-700/50" />

      <div className="z-30 h-auto w-10/12 bg-white p-4 shadow-md md:w-6/12 xl:w-4/12">
        <p className="mb-3 text-lg font-semibold md:text-xl">
          Confirm Deletion
        </p>
        <p className="text-sm text-gray-700 md:text-base">
          Are you sure you want to delete?
        </p>

        <div className="flex justify-end gap-2 pt-8">
          <Button
            className="h-8 w-4/12 text-xs xs:h-10 xs:text-sm md:h-12 md:text-base"
            onClick={onClose}
            disabled={isLoading}
            variant="highlight">
            Cancel
          </Button>
          <Button
            className="h-8 w-4/12 text-xs xs:h-10 xs:text-sm md:h-12 md:text-base"
            onClick={onDelete}
            disabled={isLoading}>
            {isLoading ? 'Deleting...' : 'Delete Now'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
