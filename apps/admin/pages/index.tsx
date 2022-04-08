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
    <div className={'w-screen h-screen bg-gray-100 flex'}>
      <SideBar
        sideBarUpElements={sideBarUpLinks}
        sideBarDownElements={sideBarDownLinks}
      />
      <main className={'flex-1 flex-col'}>
        <div
          className={
            'h-[6vh] min-h-fit bg-white w-full shadow-sm flex items-center px-10'
          }
        >
          <h1 className={'text-lg mb-0'}>NavBar</h1>
        </div>
        <div className={'p-5'}>
          <h3>Main Content</h3>
          <p>alexandre</p>
        </div>
      </main>
    </div>
  );
}

export default Index;
