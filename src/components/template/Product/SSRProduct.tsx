import { publicGet } from '@/utils';
import { GetProductResponse } from '@/types';

import Details from './Details';

const SSRProduct = async ({ id }: { id: string }) => {
  const data = await publicGet<GetProductResponse>(`products/${id}`, {
    cache: 'no-store',
  });

  return (
    <div className="flex justify-center items-center w-full">
      <Details data={data} />
    </div>
  );
};

export default SSRProduct;
