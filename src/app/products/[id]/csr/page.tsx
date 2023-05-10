import { CSRProduct } from '@/components/template';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
};

const Product = ({ params }: { params: { id: string } }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <h4 className="text-center my-8">Product ID: {params.id}</h4>
      <CSRProduct id={params.id} />
    </div>
  );
};

export default Product;
