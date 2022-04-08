import { Button, Text, Tooltip } from '@nextui-org/react';
import Link from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';

/* eslint-disable-next-line */
export interface NavBarProps {}

export function NavBar(props: NavBarProps) {
  return (
    <div
      className={
        'h-[6vh] min-h-fit bg-white w-full shadow-sm flex items-center px-10'
      }
    >
      <Text
        h1
        size={30}
        css={{
          textGradient: '45deg, teal -100%, $green700 100%',
        }}
        weight="bold"
        className={'flex-1'}
      >
        Hotelify
      </Text>

      <Tooltip content={'User Profile'} placement={'bottom'} color={'primary'}>
        <Link href={'#'}>
          <Button
            auto
            color={'default'}
            css={{ background: '$white' }}
            icon={<AiOutlineUser className={'text-gray-500 text-2xl'} />}
          />
        </Link>
      </Tooltip>
    </div>
  );
}

export default NavBar;
