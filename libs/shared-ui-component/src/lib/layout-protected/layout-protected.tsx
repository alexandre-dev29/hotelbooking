import SideBar from '../side-bar/side-bar';
import NavBar from '../nav-bar/nav-bar';
import { SideBarLinkProps } from '../UiTypes';
import {
  AiFillSetting,
  AiOutlineFileDone,
  AiOutlineLogout,
  AiOutlineUsergroupAdd,
} from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';

import { logoutUser } from '../AuthUtilities';

export function LayoutProtected({ children }: any) {
  const sideBarUpLinks: SideBarLinkProps[] = [
    {
      href: '/agentsPage',
      iconElement: (
        <AiOutlineUsergroupAdd className={'text-2xl text-teal-500'} />
      ),
      linkTitle: 'Agents',
    },
    {
      href: '/users',
      iconElement: <FaUsers className={'text-2xl text-teal-500'} />,
      linkTitle: 'Users',
    },
    {
      href: '/',
      iconElement: <AiOutlineFileDone className={'text-2xl text-teal-500 '} />,
      linkTitle: 'Message',
    },
  ];
  const sideBarDownLinks: SideBarLinkProps[] = [
    {
      href: '/',
      iconElement: <AiFillSetting className={'text-2xl text-teal-500'} />,
      linkTitle: 'Settings',
    },
    {
      iconElement: <AiOutlineLogout className={'text-2xl text-teal-500 '} />,
      linkTitle: 'Logout',
      onClick: async () => {
        logoutUser();
        window.location.assign('Auth/login');
      },
    },
  ];
  return (
    <div className={'w-screen h-screen bg-gray-100 flex'}>
      <SideBar
        sideBarUpElements={sideBarUpLinks}
        sideBarDownElements={sideBarDownLinks}
      />
      <main className={'flex-1 flex-col'}>
        <NavBar />
        <div className={'p-10'}>{children}</div>
      </main>
    </div>
  );
}

export default LayoutProtected;
