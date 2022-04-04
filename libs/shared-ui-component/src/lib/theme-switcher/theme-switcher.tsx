import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';
import { MoonIcon } from '../Icons/MoonIcon';
import { SunIcon } from '../Icons/SunIcon';

/* eslint-disable-next-line */
export interface ThemeSwitcherProps {}

export function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <div
      className={'absolute top-12 md:top-96 right-4 transform rotate-90'}
      style={{ zIndex: 100 }}
    >
      <Switch
        checked={isDark}
        onChange={(e) => {
          setTheme(e.target.checked ? 'dark' : 'light');
        }}
        iconOff={<SunIcon filled />}
        iconOn={<MoonIcon filled />}
        shadow={true}
        color="primary"
        size={'xl'}
      />
    </div>
  );
}

export default ThemeSwitcher;
