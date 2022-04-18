import Link from 'next/link';
import { Button, Tooltip } from '@nextui-org/react';
import { SideBarLinkProps } from '../UiTypes';

/* eslint-disable-next-line */

export function SideBarLink(props: SideBarLinkProps) {
  return (
    <Tooltip content={props.linkTitle} color={'invert'} placement={'right'}>
      {props.href ? (
        <Link href={props.href}>
          <Button
            auto
            color={'default'}
            css={{ background: '$white' }}
            icon={props.iconElement}
          />
        </Link>
      ) : (
        <Button
          auto
          color={'default'}
          css={{ background: '$white' }}
          icon={props.iconElement}
          onClick={props.onClick}
        />
      )}
    </Tooltip>
  );
}

export default SideBarLink;
