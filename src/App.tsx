import React from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ThemeRDProvider, useThemeRD } from '@contexts/theme';

import './config/ReactotronConfig';

import GlobalStyle from '@styles/global';

import history from '@services/history';

import Routes from './routes';

const App: React.FC = () => {
  const { theme } = useThemeRD();

  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

const DefaultAPP: React.FC = () => (
  <ThemeRDProvider>
    <App />
  </ThemeRDProvider>
);

export default DefaultAPP;
