'use client';

import { CircularProgress } from '@mui/material';

import { useGetProductQuery } from '@/state/reducers';

import Details from './Details';

const CSRProductDetails = ({ id }: { id: string }) => {
  const { isLoading, isSuccess, data, error } = useGetProductQuery({
    productId: id,
  });

  return (
    <div className="max-w-7xl mx-auto px-6">
      <h4 className="text-center my-8">Product ID: {id}</h4>
      <div className="flex justify-center items-center w-full">
        {isLoading ? (
          <CircularProgress size={32} />
        ) : isSuccess ? (
          <Details data={data} />
        ) : (
          <div>{JSON.parse(String(error))}</div>
        )}
      </div>
    </div>
  );
};

export default CSRProductDetails;
