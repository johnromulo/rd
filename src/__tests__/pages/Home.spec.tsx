import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import Home from '@pages/Home';

import primary from '@styles/themes/primary';

describe('Home Page', () => {
  it('should be able show home page', () => {
    const { debug } = render(
      <ThemeProvider theme={primary}>
        <Home />
      </ThemeProvider>
    );

    debug();
  });
});
