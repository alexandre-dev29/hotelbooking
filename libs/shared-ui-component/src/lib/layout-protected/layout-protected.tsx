import SideBar from '../side-bar/side-bar';
import NavBar from '../nav-bar/nav-bar';
import { SideBarLinkProps } from '../UiTypes';
import {
  AiFillHome,
  AiFillSetting,
  AiFillStar,
  AiOutlineFileDone,
  AiOutlineLogout,
} from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { logoutUser } from '../AuthUtilities';

export function LayoutProtected({ children }: any) {
  const router = useRouter();
  const sideBarUpLinks: SideBarLinkProps[] = [
    {
      href: '/',
      iconElement: <AiFillHome className={'text-2xl text-teal-500'} />,
      linkTitle: 'Dashboard',
    },
    {
      href: '/',
      iconElement: <AiFillStar className={'text-2xl text-teal-500'} />,
      linkTitle: 'Favorite',
    },
    {
      href: '/',
      iconElement: <FaTelegram className={'text-2xl text-teal-500'} />,
      linkTitle: 'Message',
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
        {children}
      </main>
    </div>
  );
}

export default LayoutProtected;
