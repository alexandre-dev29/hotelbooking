import { render } from '@testing-library/react';
import SideBarLink from './side-bar-link';
import { FaArrowRight } from 'react-icons/fa';

describe('SideBarLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SideBarLink iconElement={<FaArrowRight />} linkTitle={'Testing'} />
    );
    expect(baseElement).toBeTruthy();
  });
});
