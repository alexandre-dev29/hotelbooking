import {
  ThemeSwitcher,
  useGetAllUsersQuery,
} from '@hotelbooking/shared-ui-component';
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
  const { data, loading } = useGetAllUsersQuery();
  if (!loading) console.log(data);
  return (
    <>
      <BackgroundOverlayDynamic />
      {data.getAllUsers.map((user, index) => (
        <h1 key={index}>{user.phoneNumber}</h1>
      ))}
      <ThemeSwitcher />
    </>
  );
}

export default Index;
