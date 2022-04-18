import { render } from '@testing-library/react';

import LayoutProtected from './layout-protected';

describe('LayoutProtected', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LayoutProtected />);
    expect(baseElement).toBeTruthy();
  });
});
