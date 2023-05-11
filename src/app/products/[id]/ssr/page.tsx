import { SSRProduct } from '@/components/template';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
};

const Product = ({ params }: { params: { id: string } }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <h4 className="text-center my-8">Product ID: {params.id}</h4>
      {/* @ts-expect-error Server Component */}
      <SSRProduct id={params.id} />
    </div>
  );
};

export default Product;
