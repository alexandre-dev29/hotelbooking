import { render } from '@testing-library/react';

import LatestClients from './latest-clients';

describe('LatestClients', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LatestClients />);
    expect(baseElement).toBeTruthy();
  });
});
