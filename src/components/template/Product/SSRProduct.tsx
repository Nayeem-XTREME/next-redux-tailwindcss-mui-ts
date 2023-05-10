import { apiUrl } from '@/configs';
import { GetProductResponse } from '@/types';

import Details from './Details';

const SSRProduct = async ({ id }: { id: string }) => {
  const res = await fetch(`${apiUrl}/products/${id}`, { cache: 'no-store' });
  const data = (await res.json()) as GetProductResponse;

  return (
    <div className="flex justify-center items-center w-full">
      <Details data={data} />
    </div>
  );
};

export default SSRProduct;
