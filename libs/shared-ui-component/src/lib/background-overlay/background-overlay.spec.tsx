import { render } from '@testing-library/react';

import BackgroundOverlay from './background-overlay';

describe('BackgroundOverlay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BackgroundOverlay />);
    expect(baseElement).toBeTruthy();
  });
});
