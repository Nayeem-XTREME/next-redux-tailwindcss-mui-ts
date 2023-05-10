import { CSRProductDetails } from '@/components/template';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
};

const Products = ({ params }: { params: { id: string } }) => {
  return <CSRProductDetails id={params.id} />;
};

export default Products;
