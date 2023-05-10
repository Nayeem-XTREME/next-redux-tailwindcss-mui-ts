import { getProduct, getProductRunningQueriesThunk } from '@/state/reducers';
import { dispatch } from '@/state/store';

import Details from './Details';

const SSRProductDetails = async ({ id }: { id: string }) => {
  const [data] = await Promise.all([
    dispatch(getProduct.initiate({ productId: id })),
    dispatch(getProductRunningQueriesThunk()),
  ]);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <h4 className="text-center my-8">Product ID: {id}</h4>
      <Details data={data.data} />
    </div>
  );
};

export default SSRProductDetails;
