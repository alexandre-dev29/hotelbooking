import { SideBar, SideBarLinkProps } from '@hotelbooking/shared-ui-component';
import {
  AiFillHome,
  AiFillSetting,
  AiFillStar,
  AiOutlineFileDone,
  AiOutlineLogout,
} from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';

export function Index() {
  const sideBarUpLinks: SideBarLinkProps[] = [
    {
      href: '/',
      iconElement: <AiFillHome className={'text-3xl text-teal-500'} />,
      linkTitle: 'Dashboard',
    },
    {
      href: '/',
      iconElement: <AiFillStar className={'text-3xl text-teal-500'} />,
      linkTitle: 'Favorite',
    },
    {
      href: '/',
      iconElement: <FaTelegram className={'text-3xl text-teal-500'} />,
      linkTitle: 'Message',
    },
    {
      href: '/',
      iconElement: <AiOutlineFileDone className={'text-3xl text-teal-500 '} />,
      linkTitle: 'Message',
    },
  ];
  const sideBarDownLinks: SideBarLinkProps[] = [
    {
      href: '/',
      iconElement: <AiFillSetting className={'text-3xl text-teal-500'} />,
      linkTitle: 'Dashboard',
    },
    {
      href: '/',
      iconElement: <AiOutlineLogout className={'text-3xl text-teal-500 '} />,
      linkTitle: 'Favorite',
    },
  ];
  return (
    <div className={'w-screen h-screen bg-gray-100'}>
      <SideBar
        sideBarUpElements={sideBarUpLinks}
        sideBarDownElements={sideBarDownLinks}
      />
    </div>
  );
}

export default Index;
