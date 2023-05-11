import Image from 'next/image';

import type { GetProductResponse } from '@/types';

const Details = ({ data }: { data?: GetProductResponse }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {data?.thumbnail && data?.title && (
        <Image
          src={data.thumbnail}
          alt={data.title}
          width={400}
          height={400}
          className="rounded-md shadow-md"
          priority
        />
      )}
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-bold">{data?.title}</h3>
        <h4>Price: {data?.price} $</h4>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h6>Brand: {data?.brand}</h6>
        <h6>Category: {data?.category}</h6>
        <h6>Rating: {data?.rating}</h6>
      </div>
      <p className="max-w-xl text-center">{data?.description}</p>
    </div>
  );
};

export default Details;
