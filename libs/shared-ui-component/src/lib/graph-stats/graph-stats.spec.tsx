import { render } from '@testing-library/react';

import GraphStats from './graph-stats';

describe('GraphStats', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GraphStats />);
    expect(baseElement).toBeTruthy();
  });
});
