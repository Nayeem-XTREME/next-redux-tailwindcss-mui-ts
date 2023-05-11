'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import tw from 'tailwind-styled-components';

import { Button, FlexCentered } from '@/components/core';

const StyledInput = tw.input`
  z-10 
  w-full 
  rounded-md 
  border-2 
  border-[##1d4ed8] 
  bg-transparent 
  px-4 
  py-2 
  text-black 
  outline-none 
  dark:text-white
`;

const HomeTemplate = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (type: 'ssr' | 'csr') => {
    const productId = inputRef.current?.value;

    if (productId && !isNaN(parseFloat(productId))) {
      router.push(`/products/${productId}/${type}`);
    }
  };

  return (
    <FlexCentered className="w-full max-w-lg flex-col gap-4">
      <StyledInput
        name="Search"
        placeholder="Enter Product ID"
        ref={inputRef}
      />
      <FlexCentered className="w-full justify-between gap-3">
        <Button
          variant="outlined"
          className="w-full min-w-max text-white"
          onClick={() => handleClick('ssr')}
        >
          SSR Search
        </Button>
        <Button
          variant="outlined"
          className="w-full min-w-max text-white"
          onClick={() => handleClick('csr')}
        >
          CSR Search
        </Button>
      </FlexCentered>
    </FlexCentered>
  );
};

export default HomeTemplate;
