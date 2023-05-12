'use client';

import { LoadingButton, type LoadingButtonProps } from '@mui/lab';

const StyledButton = ({ children, ...rest }: LoadingButtonProps) => (
  <LoadingButton
    classes={{
      root: 'min-h-[40px] rounded-lg text-base font-semibold normal-case text-emp-black-medium px-4',
      disabled:
        '!bg-emp-disabled/20' + (rest.loading ? ' !text-transparent' : ''),
    }}
    {...rest}
  >
    {children}
  </LoadingButton>
);

export default StyledButton as typeof LoadingButton;
