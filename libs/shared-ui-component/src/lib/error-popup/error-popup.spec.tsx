import { render } from '@testing-library/react';

import ErrorPopup from './error-popup';

describe('ErrorPopup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ErrorPopup />);
    expect(baseElement).toBeTruthy();
  });
});
