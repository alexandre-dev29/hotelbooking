import { ThemeSwitcher } from '@hotelbooking/shared-ui-component';
import dynamic from 'next/dynamic';

const BackgroundOverlayDynamic = dynamic(
  () =>
    // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
    import(
      '../../../libs/shared-ui-component/src/lib/background-overlay/background-overlay'
    ),
  { ssr: false }
);

export function Index() {
  return (
    <>
      <BackgroundOverlayDynamic />
      <h1>Hello alexandre</h1>
      <ThemeSwitcher />
    </>
  );
}

export default Index;
