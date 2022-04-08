import { render } from '@testing-library/react';

import HotelStats from './hotel-stats';

describe('HotelStats', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HotelStats />);
    expect(baseElement).toBeTruthy();
  });
});
