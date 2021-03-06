import React, { createContext, useState, useContext, useCallback } from 'react';
import { DefaultTheme } from 'styled-components';

import primary from '@styles/themes/primary';
import blackfriday from '@styles/themes/blackfriday';

interface ThemeContextData {
  theme: DefaultTheme;
  selectTheme(): void;
}

const ThemeRDContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeRDProvider: React.FC = ({ children }: React.Props<{}>) => {
  const [theme, setTheme] = useState<DefaultTheme>(primary);

  const selectTheme = useCallback(() => {
    setTheme(t => (t.title === 'primary' ? blackfriday : primary));
  }, []);

  return (
    <ThemeRDContext.Provider
      value={{
        theme,
        selectTheme,
      }}
    >
      {children}
    </ThemeRDContext.Provider>
  );
};

export function useThemeRD() {
  const context = useContext(ThemeRDContext);

  return context;
}
