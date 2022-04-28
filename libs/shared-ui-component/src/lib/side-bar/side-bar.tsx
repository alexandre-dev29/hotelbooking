import SideBarLink from '../side-bar-link/side-bar-link';
import { SideBarLinkProps } from '../UiTypes';
import { AiTwotoneHome } from 'react-icons/ai';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface SideBarProps {
  sideBarUpElements: SideBarLinkProps[];
  sideBarDownElements?: SideBarLinkProps[];
}

export function SideBar(props: SideBarProps) {
  return (
    <div
      className={
        'h-screen bg-white w-[5vw] min-w-[5rem] shadow-sm py-12 flex flex-col items-center '
      }
    >
      <Link href={'/'} passHref={true}>
        <button type={'button'}>
          <AiTwotoneHome
            className={
              'text-[2.8rem] bg-teal-400 rounded-full p-3 text-white transition-all duration-500 hover:shadow-2xl cursor-pointer'
            }
          />
        </button>
      </Link>
      <div className={'flex flex-col justify-between h-full'}>
        <div className={'grid grid-rows-1 gap-10 mt-12'}>
          {props.sideBarUpElements.map((currentElement, index) => (
            <SideBarLink
              key={index}
              href={currentElement.href}
              iconElement={currentElement.iconElement}
              linkTitle={currentElement.linkTitle}
            />
          ))}
        </div>
        <div className={'grid grid-rows-1 gap-8'}>
          {props.sideBarDownElements?.map((currentElement, index) => (
            <SideBarLink
              key={index}
              href={currentElement.href}
              iconElement={currentElement.iconElement}
              linkTitle={currentElement.linkTitle}
              onClick={currentElement.onClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
