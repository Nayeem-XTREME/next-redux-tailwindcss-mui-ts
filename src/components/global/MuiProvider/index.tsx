'use client';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';

import { inter } from '@/utils';

const isBrowser = typeof document !== 'undefined';

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  components: {
    MuiInputLabel: {
      defaultProps: {
        sx: {
          fontSize: '14px',
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        sx: {
          fontSize: '14px',
        },
      },
    },
  },
});

const createEmotionCache = () => {
  let insertionPoint: HTMLMetaElement | undefined;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: 'mui-style', insertionPoint });
};

const emotionCache = createEmotionCache();

const MuiProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledEngineProvider injectFirst>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </CacheProvider>
    </StyledEngineProvider>
  );
};

export default MuiProvider;
