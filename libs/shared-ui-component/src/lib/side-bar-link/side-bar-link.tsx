import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { SideBarLinkProps } from '../UiTypes';

/* eslint-disable-next-line */

export function SideBarLink(props: SideBarLinkProps) {
  return (
    <Link href={props.href}>
      <Button
        auto
        color={'default'}
        css={{ background: '$white' }}
        icon={props.iconElement}
      />
    </Link>
  );
}

export default SideBarLink;
