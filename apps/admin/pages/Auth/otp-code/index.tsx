import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { toast, Toaster } from 'react-hot-toast';
import { Button, Loading, Text } from '@nextui-org/react';
import { useRouter, withRouter } from 'next/router';
import { useConfirmPhoneNumberMutation } from '@hotelbooking/shared-ui-component';

/* eslint-disable-next-line */
export interface OtpCodeProps {}

export function OtpCode(props: OtpCodeProps) {
  const [currentCode, setCurrentCode] = useState('');
  const [loadingActive, setLoadingActive] = useState('none');
  const [confirmPhoneNumber] = useConfirmPhoneNumberMutation({
    errorPolicy: 'all',
    fetchPolicy: 'network-only',
  });

  const router = useRouter();
  const notify = () =>
    toast.success(
      `Your Phone Number has been Confirm. Please login using your credentials`,
      {
        position: 'top-right',
      }
    );

  const handleChange = (otp) => {
    setCurrentCode(otp);
  };
  const confirmCodeHandle = async () => {
    const confirmResponse = await confirmPhoneNumber({
      variables: {
        phoneNumber: router.query.phoneNumber,
        otpCode: currentCode,
      },
      errorPolicy: 'all',
      onError: (err) => {
        console.log(err);
      },
    });

    if (!confirmResponse.errors && confirmResponse.data.ConfirmPhoneNumber) {
      notify();
      await router.push({
        pathname: '/Auth/login',
      });
    }
    setLoadingActive('none');
  };

  return (
    <div
      style={{ zIndex: 10 }}
      className="flex flex-col w-screen h-screen px-12 py-6"
    >
      <div>
        <Toaster />
        <Text
          h1
          size={40}
          css={{
            textGradient: '45deg, $green200 -20%, $green700 90%',
          }}
          weight="bold"
        >
          HotelBook
        </Text>
      </div>
      <div
        className={'flex flex-1 justify-center items-center flex-col md:-mt-6'}
      >
        <Text
          h1
          css={{
            color: '$mainTextColor',
          }}
          weight="bold"
          className={'text-3xl md:text-3xl xl:text-4xl'}
        >
          Confirmation Code
        </Text>
        <Text
          h1
          css={{
            color: '$mainTextColor',
            letterSpacing: '$wide',
            mt: 20,
          }}
          className={'text-3xl md:text-3xl xl:text-4xl text-center'}
          weight="thin"
        >
          {"You've just receive a confirmation code write it down"}
        </Text>
        <div
          className={
            'py-12 flex flex-col gap-5 w-full sm:w-1/2 xl:w-1/3 justify-center items-center'
          }
        >
          <Loading
            type="default"
            size={'lg'}
            hidden={true}
            style={{ display: loadingActive }}
            className={'mx-auto'}
          />
          <OtpInput
            value={currentCode}
            onChange={handleChange}
            numInputs={6}
            isInputNum={true}
            separator={<span>-</span>}
            isInputSecure={false}
            className={''}
            focusStyle={'shadow-gray-200 shadow-lg transition-all duration-500'}
            inputStyle={
              'text-5xl border-2 md:!w-20 md:!h-20 text-green-500 font-bold transition-all duration-500'
            }
          />
          <Button
            shadow
            color={'primary'}
            auto
            type={'submit'}
            css={{
              borderRadius: '$xs',
              w: '10rem',
              py: '1.6rem',
              mt: 12,
              zIndex: '$10',
            }}
            disabled={currentCode.length != 6}
            onClick={confirmCodeHandle}
          >
            Confirm Code{' '}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(OtpCode);
