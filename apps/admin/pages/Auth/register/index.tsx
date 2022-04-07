import { Button, Loading, Text, theme } from '@nextui-org/react';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import {
  InputComponent,
  RegisterFormElement,
  useRegisterUserMutation,
} from '@hotelbooking/shared-ui-component';
import { useRouter } from 'next/router';

/* eslint-disable-next-line */
export interface RegisterProps {}

export function Register(props: RegisterProps) {
  const [loadingActive, setLoadingActive] = useState('none');
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormElement>();

  const [registerMutation] = useRegisterUserMutation({
    errorPolicy: 'all',
    fetchPolicy: 'network-only',
  });

  const onSubmitLogin: SubmitHandler<RegisterFormElement> = async ({
    firstName,
    lastName,
    phoneNumber,
    password,
    address,
  }) => {
    const registerResponse = await registerMutation({
      variables: {
        firstName,
        lastName,
        phoneNumber,
        password,
        location: address,
      },
      errorPolicy: 'all',
      onError: (err) => {
        console.log(err);
      },
    });

    if (
      !registerResponse.errors &&
      registerResponse.data.RegisterUser.firstName === firstName
    ) {
      await router.push('/Auth/login');
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
          Register To the platform
        </Text>
        <Text
          h1
          css={{
            color: '$mainTextColor',
            letterSpacing: '$wide',
            mt: 20,
          }}
          className={'text-3xl md:text-4xl xl:text-5xl text-center'}
          weight="thin"
        >
          register and start booking hotels for your next journey
        </Text>
        <form
          className={'py-12 flex flex-col gap-5 w-full sm:w-1/2 xl:w-1/3'}
          onSubmit={handleSubmit(onSubmitLogin)}
        >
          <Loading
            type="default"
            size={'lg'}
            hidden={true}
            style={{ display: loadingActive }}
            className={'mx-auto'}
          />
          <div className={'flex flex-col md:grid md:grid-cols-2 gap-4'}>
            <InputComponent
              errors={errors}
              useFormRegisterReturn={register('firstName', { required: true })}
              placeHolder={'First Name'}
              autocomplete={'username'}
              elementToCheck={errors.firstName}
            />
            <InputComponent
              errors={errors}
              useFormRegisterReturn={register('lastName', { required: true })}
              placeHolder={'last Name'}
              autocomplete={'username'}
              elementToCheck={errors.lastName}
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
            <InputComponent
              errors={errors}
              useFormRegisterReturn={register('address', {
                required: true,
              })}
              placeHolder={'Address'}
              elementToCheck={errors.address}
              customStyle={'col-span-2'}
            />
          </div>

          <Button
            shadow
            color={'primary'}
            auto
            type={'submit'}
            css={{ borderRadius: '$xs', py: '1.6rem', zIndex: '$10' }}
          >
            Register{' '}
          </Button>
          <a
            href={'#'}
            className={'self-center underline underline-offset-2'}
            style={{ zIndex: '10', color: '$mainTextColor' }}
          >
            Forgot Password?
          </a>
          <p
            style={{
              color: '$mainTextColor',
              textAlign: 'center',
            }}
          >
            Already have an account?{' '}
            <Link href={'/Auth/login'}>
              <a
                style={{
                  color: theme.colors.gray700.value,
                  textDecoration: 'underline',
                  textUnderlineOffset: '0.1rem',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}
              >
                Login here
              </a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
