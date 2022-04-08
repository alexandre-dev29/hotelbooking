import {
  HotelStats,
  NavBar,
  SideBar,
  SideBarLinkProps,
} from '@hotelbooking/shared-ui-component';
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
      linkTitle: 'Settings',
    },
    {
      href: '/',
      iconElement: <AiOutlineLogout className={'text-3xl text-teal-500 '} />,
      linkTitle: 'Logout',
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
        <div className={'grid grid-cols-3 gap-24 p-10'}>
          <div className={'col-span-2'}>
            <h3 className={'font-body font-black tracking-wider'}>Dashboard</h3>
            <HotelStats />
          </div>
          <div className={'bg-green-400'}>sdf</div>
        </div>
      </main>
    </div>
  );
}

export default Index;
