import { BsShieldFillPlus } from 'react-icons/bs';
import SideBarLink from '../side-bar-link/side-bar-link';
import { SideBarLinkProps } from '../UiTypes';

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
      <BsShieldFillPlus
        className={
          'text-[3rem] bg-teal-400 rounded-full p-3 text-white transition-all duration-500 hover:shadow-2xl cursor-pointer'
        }
      />
      <div className={'flex flex-col justify-between h-full'}>
        <div className={'grid grid-rows-1 gap-5 mt-12'}>
          {props.sideBarUpElements.map((currentElement, index) => (
            <SideBarLink
              key={index}
              href={currentElement.href}
              iconElement={currentElement.iconElement}
              linkTitle={currentElement.linkTitle}
            />
          ))}
        </div>
        <div className={'grid grid-rows-1 gap-5'}>
          {props.sideBarDownElements?.map((currentElement, index) => (
            <SideBarLink
              key={index}
              href={currentElement.href}
              iconElement={currentElement.iconElement}
              linkTitle={currentElement.linkTitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
