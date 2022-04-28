import { LayoutProtected } from '@hotelbooking/shared-ui-component';

import Dashboard from './dashboard';

export default function Index() {
  return (
    <LayoutProtected>
      <Dashboard />
    </LayoutProtected>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
      userTypes: ['User'],
    },
  };
}
