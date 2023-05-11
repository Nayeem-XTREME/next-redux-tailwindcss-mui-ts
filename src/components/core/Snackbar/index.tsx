'use client';

import { Alert, Slide, Snackbar } from '@mui/material';

import { useDispatch, useSelector } from '@/state/hooks';
import { closeSnackbar } from '@/state/reducers';

import type { SnackbarOrigin } from '@mui/material/Snackbar';

type SnackbarProps = {
  className?: string;
  autoHideDuration?: number;
  anchorOrigin?: SnackbarOrigin;
  iconMapping?: {
    success?: React.ReactNode;
    error?: React.ReactNode;
    warning?: React.ReactNode;
    info?: React.ReactNode;
  };
  defaultTransition?: boolean;
};

const SnackbarComponent = ({
  className,
  iconMapping,
  anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'left',
  },
  autoHideDuration,
  defaultTransition,
}: SnackbarProps) => {
  const dispatch = useDispatch();
  const { open, type, message } = useSelector(({ app }) => app.snackbarReducer);

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return;
    dispatch(closeSnackbar());
  };

  const handleExited = () => {
    dispatch(closeSnackbar());
  };

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      anchorOrigin={anchorOrigin}
      autoHideDuration={autoHideDuration || 6000}
      {...(className && { className })}
      {...(!defaultTransition && {
        TransitionComponent: Slide,
        TransitionProps: { onExited: handleExited },
      })}
    >
      <Alert
        variant="filled"
        severity={type}
        onClose={handleClose}
        classes={{
          filledError: 'bg-status-error text-white',
          filledInfo: 'bg-emp-black-high/80 text-white',
          filledSuccess: 'bg-primary-500 text-emp-black-medium',
        }}
        {...(iconMapping && {
          iconMapping: {
            ...(iconMapping.info && { info: iconMapping.info }),
            ...(iconMapping.error && { info: iconMapping.error }),
            ...(iconMapping.warning && { info: iconMapping.warning }),
            ...(iconMapping.success && { info: iconMapping.success }),
          },
        })}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
