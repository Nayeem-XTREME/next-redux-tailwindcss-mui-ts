import { Centered } from '@/components/core';
import { publicGet } from '@/helpers';
import { GetProductResponse } from '@/types';

import Details from './Details';

const SSRProduct = async ({ id }: { id: string }) => {
  const data = await publicGet<GetProductResponse>(`products/${id}`, {
    cache: 'no-store',
  });

  return (
    <Centered>
      <Details data={data} />
    </Centered>
  );
};

export default SSRProduct;
