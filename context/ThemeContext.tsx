import React, { createContext, useState, useEffect, useContext } from 'react';
import { useColorScheme, View, Text } from 'react-native';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  currentTheme: 'light' | 'dark'; // The actual theme to apply
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>('system');

  // Determine the current theme based on the user's preference and system theme
  const currentTheme = theme === 'system' ? systemTheme || 'light' : theme;

  // console.log('System Theme:', systemTheme);
  // console.log('Selected Theme:', theme);
  // console.log('Current Theme:', currentTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentTheme }}>
      <View
        style={{
          flex: 1,
          backgroundColor: currentTheme === 'dark' ? 'black' : 'white',
        }}
      >
        {/* <Text style={{ color: currentTheme === 'dark' ? 'white' : 'black' }}>
          Current Theme: {currentTheme}
        </Text> */}
        {children}
      </View>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
