import { useGetAllUsersQuery } from '@hotelbooking/shared-ui-component';

export function Index() {
  const { data, loading } = useGetAllUsersQuery();
  if (!loading) console.log(data);
  return (
    <>
      {!loading
        ? data.getAllUsers.map((user, index) => (
            <h1 key={index}>{user.phoneNumber}</h1>
          ))
        : 'Loading'}
    </>
  );
}

export default Index;
