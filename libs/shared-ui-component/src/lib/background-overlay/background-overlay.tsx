import { Image } from '@nextui-org/react';
import { useTheme } from 'next-themes';

/* eslint-disable-next-line */
export interface BackgroundOverlayProps {}

export function BackgroundOverlay(props: BackgroundOverlayProps) {
  const { theme } = useTheme();
  return (
    <div>
      <Image
        src="https://nextui.org/gradient-left-dark.svg"
        style={{
          position: 'fixed',
          width: '80vw',
          height: '1400px',
          top: '-10%',
          left: '-20%',
          display: theme === 'dark' ? 'block' : 'none',
          zIndex: '0',
        }}
      />

      <Image
        src="https://nextui.org/gradient-right-dark.svg"
        style={{
          position: 'fixed',
          top: '-45%',
          right: '-40%',
          height: '1500px',
          display: theme === 'dark' ? 'block' : 'none',
          zIndex: '0',
        }}
      />
    </div>
  );
}

export default BackgroundOverlay;
