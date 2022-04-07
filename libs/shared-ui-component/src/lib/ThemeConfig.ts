import { createTheme } from '@nextui-org/react';

export const LightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      primaryLight: '$green400',
      default: '#FFF',
      primaryDark: '$green700',
      primary: '$green500',
      mainTextColor: '$gray900',
      primaryShadow: '$green500',
    },
  },
});

export const DarkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primaryLight: '$green400',
      primaryDark: '$green700',
      default: '#FFF',
      primary: '$green500',
      mainTextColor: '$gray200',
      primaryShadow: '$green500',
    },
  },
});
