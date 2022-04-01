import { ErrorTypeGraphQl } from '@hotelbooking/shared-types';
import { Dialog } from '@headlessui/react';
import { Text } from '@nextui-org/react';

/* eslint-disable-next-line */
export interface ErrorPopupProps {
  errorType: ErrorTypeGraphQl;
  messages: string[];
  onCloseEvent: (status: boolean) => void;
  openStatus: boolean;
}

export function ErrorPopup(props: ErrorPopupProps) {
  return (
    <Dialog open={props.openStatus} onClose={() => props.onCloseEvent(false)}>
      <Dialog.Overlay />

      <Dialog.Title>
        {props.errorType === ErrorTypeGraphQl.Network
          ? 'Network Error'
          : 'Unknown Error'}
      </Dialog.Title>
      <Dialog.Description>
        An error has occurred when trying to perform one action
        <br />
        These are errors :
      </Dialog.Description>
      {props.messages.map((currentMessage, index) => (
        <Text
          h1
          size={12}
          css={{
            textGradient: '45deg, $yellow500 -20%, $red500 100%',
          }}
          weight="bold"
          key={index}
        >
          {currentMessage}
        </Text>
      ))}
      <button onClick={() => props.onCloseEvent(false)}>Okay</button>
    </Dialog>
  );
}

export default ErrorPopup;
