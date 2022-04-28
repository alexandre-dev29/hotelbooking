import { render } from '@testing-library/react';

import ErrorPopup from './error-popup';
import { ErrorTypeGraphQl } from '../UiTypes';

describe('ErrorPopup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ErrorPopup
        errorType={ErrorTypeGraphQl.Request}
        messages={['sdsad']}
        onCloseEvent={() => {
          console.log('good');
        }}
        openStatus={true}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
