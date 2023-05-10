import { Suspense } from 'react';

import { SSRProductDetails } from '@/components/template';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
};

const Products = async ({ params }: { params: { id: string } }) => {
  return (
    <Suspense
      fallback={
        <div className="flex w-full h-screen justify-center items-center">
          Loading...
        </div>
      }
    >
      <SSRProductDetails id={params.id} />
    </Suspense>
  );
};

export default Products;
