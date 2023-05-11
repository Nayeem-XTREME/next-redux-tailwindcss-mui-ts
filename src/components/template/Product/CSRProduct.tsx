'use client';

import { CircularProgress } from '@mui/material';

import { useGetProductQuery } from '@/state/reducers';

import Details from './Details';

const CSRProduct = ({ id }: { id: string }) => {
  const { isLoading, isSuccess, data } = useGetProductQuery({
    productId: id,
  });

  return (
    <div className="flex justify-center items-center w-full">
      {isLoading ? (
        <CircularProgress size={32} />
      ) : isSuccess ? (
        <Details data={data} />
      ) : (
        <div>Something went wrong</div>
      )}
    </div>
  );
};

export default CSRProduct;
