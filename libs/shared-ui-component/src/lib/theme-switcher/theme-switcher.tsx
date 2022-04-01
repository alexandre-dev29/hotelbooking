import styles from './theme-switcher.module.scss';
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
    <div className={styles['container']}>
      <Switch
        checked={isDark}
        onChange={(e) => {
          setTheme(e.target.checked ? 'dark' : 'light');
        }}
        iconOff={<SunIcon filled />}
        iconOn={<MoonIcon filled />}
      />
    </div>
  );
}

export default ThemeSwitcher;
