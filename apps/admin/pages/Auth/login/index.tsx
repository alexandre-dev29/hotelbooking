import { Button, Loading, Text } from '@nextui-org/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import {
  loginUser,
  useLoginUserMutation,
} from '@hotelbooking/shared-ui-component';
import { useRouter } from 'next/router';

/* eslint-disable-next-line */
export interface LoginProps {}

export interface LoginFormElement {
  phoneNumber: string;
  password: string;
}

export function Login(props: LoginProps) {
  const router = useRouter();
  const [loadingActive, setLoadingActive] = useState('none');
  const [loginMutation] = useLoginUserMutation({
    errorPolicy: 'all',
    fetchPolicy: 'network-only',
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
      loginUser(loginResponse.data.loginUser);
      await router.push('/');
    }
    setLoadingActive('none');
  };

  return (
    <div
      style={{ zIndex: 10 }}
      className="flex flex-col w-screen h-screen px-12 py-6"
    >
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
          <input
            placeholder={'Phone number'}
            type={'text'}
            autoComplete={'phoneNumber'}
            style={{ zIndex: '10', color: '$mainTextColor' }}
            className={
              'outline-1 border-2 rounded-md px-6 py-4 w-full placeholder-gray-500'
            }
            {...register('phoneNumber', { required: true })}
          />
          {errors.phoneNumber && (
            <span className={'text-red-500 -mt-3 ml-4'}>
              This field is required
            </span>
          )}
          <input
            placeholder={'Password'}
            autoComplete={'current-password'}
            type={'password'}
            style={{
              zIndex: '10',
              color: '$mainTextColor',
            }}
            className={'outline-1 border-2 rounded-md px-6 py-4 w-full '}
            {...register('password', { required: true })}
          />
          {errors.password && (
            <span className={'text-red-500 -mt-3 ml-4'}>
              This field is required
            </span>
          )}

          <Button
            shadow
            color={'primary'}
            auto
            type={'submit'}
            css={{ borderRadius: '$xs', py: '1.6rem', zIndex: '$10' }}
          >
            Login to Your Account{' '}
          </Button>
          <a
            href={'#'}
            className={'self-center underline underline-offset-2'}
            style={{ zIndex: '10', color: '$mainTextColor' }}
          >
            Forgot Password?
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
