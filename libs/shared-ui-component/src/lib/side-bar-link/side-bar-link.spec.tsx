import { render } from '@testing-library/react';

import SideBarLink from './side-bar-link';

describe('SideBarLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SideBarLink />);
    expect(baseElement).toBeTruthy();
  });
});
