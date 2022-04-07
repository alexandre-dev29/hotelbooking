import { render } from '@testing-library/react';

import InputComponent from './input-component';

describe('InputComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InputComponent />);
    expect(baseElement).toBeTruthy();
  });
});
