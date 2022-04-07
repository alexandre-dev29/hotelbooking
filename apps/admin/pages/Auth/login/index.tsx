import { Button, Loading, Text, theme } from '@nextui-org/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import {
  InputComponent,
  LoginFormElement,
  loginUser,
  useLoginUserMutation,
} from '@hotelbooking/shared-ui-component';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { toast, Toaster } from 'react-hot-toast';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  const router = useRouter();
  const [loadingActive, setLoadingActive] = useState('none');
  const [loginMutation] = useLoginUserMutation({
    errorPolicy: 'all',
    fetchPolicy: 'network-only',
  });
  const notify = () =>
    toast.success('Welcome to the hotel booking.', { position: 'top-right' });
  const notifyOtp = () =>
    toast.success('Your phone Number is not yet confirmed please confirm', {
      position: 'top-right',
    });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormElement>();

  //handling submit event on the form
  const onSubmitLogin: SubmitHandler<LoginFormElement> = async ({
    phoneNumber,
    password,
  }) => {
    setLoadingActive('block');
    const loginResponse = await loginMutation({
      variables: { phoneNumber, password },
      errorPolicy: 'all',
      onError: (err) => {
        console.log(err);
      },
    });
    if (!loginResponse.errors) {
      if (loginResponse.data.loginUser.isPhoneNumberConfirmed) {
        loginUser(loginResponse.data.loginUser);
        await router.push('/');
        notify();
      } else {
        notifyOtp();
        await router.push({
          pathname: '/Auth/otp-code',
          query: { phoneNumber: phoneNumber },
        });
      }
    }
    setLoadingActive('none');
  };

  return (
    <div
      style={{ zIndex: 10 }}
      className="flex flex-col w-screen h-screen px-12 py-6"
    >
      <Toaster />
      <div>
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
      <div className={'flex flex-1 justify-center items-center flex-col'}>
        <Text
          h1
          css={{
            color: '$mainTextColor',
          }}
          weight="bold"
          className={'text-3xl md:text-4xl xl:text-5xl'}
        >
          Login to Your Account
        </Text>
        <Text
          h1
          css={{
            color: '$mainTextColor',
            letterSpacing: '$wide',
          }}
          className={'text-3xl md:text-4xl xl:text-5xl text-center'}
          weight="thin"
        >
          login and start booking hotels for your next journey
        </Text>
        <form
          className={'py-12 flex flex-col gap-5 w-full sm:w-1/2 xl:w-1/4'}
          onSubmit={handleSubmit(onSubmitLogin)}
        >
          <Loading
            type="default"
            size={'lg'}
            hidden={true}
            style={{ display: loadingActive }}
            className={'mx-auto'}
          />

          <InputComponent
            errors={errors}
            useFormRegisterReturn={register('phoneNumber', {
              required: true,
            })}
            placeHolder={'Phone number'}
            autocomplete={'phoneNumber'}
            elementToCheck={errors.phoneNumber}
          />
          <InputComponent
            errors={errors}
            useFormRegisterReturn={register('password', {
              required: true,
            })}
            placeHolder={'Password'}
            autocomplete={'current-password'}
            type={'password'}
            elementToCheck={errors.password}
          />
          <Button
            shadow
            color={'primary'}
            auto
            type={'submit'}
            css={{ borderRadius: '$xs', py: '1.6rem', zIndex: '$10' }}
          >
            Login to Your Account{' '}
          </Button>

          <p
            style={{
              color: '$mainTextColor',
              textAlign: 'center',
            }}
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Don't have an account?{' '}
            <Link href={'/Auth/register'}>
              <a
                style={{
                  color: theme.colors.gray700.value,
                  textDecoration: 'underline',
                  textUnderlineOffset: '0.1rem',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}
              >
                Register
              </a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
