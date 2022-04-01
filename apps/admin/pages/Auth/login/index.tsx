import { Text, useTheme } from '@nextui-org/react';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  const { theme } = useTheme();
  return (
    <div style={{}} className="flex flex-col w-screen h-screen px-12 py-6">
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
          size={50}
          css={{
            color: '$gray900',
          }}
          weight="bold"
        >
          Login to Your Account
        </Text>
        <Text
          h1
          size={40}
          css={{
            color: '$gray900',
            letterSpacing: '$wide',
          }}
          weight="thin"
        >
          login and start booking hotels for your next journey
        </Text>
        <div className={'py-12 flex flex-col gap-5 w-1/5'}>
          <input
            placeholder={'Phone number'}
            type={'text'}
            className={
              'outline-1 border-2 rounded-md px-6 py-4 w-full placeholder-gray-500'
            }
          />
          <input
            placeholder={'Passsword'}
            type={'password'}
            className={
              'outline-1 border-2 rounded-md px-6 py-4 w-full placeholder-gray-700'
            }
          />
          <button
            type={'submit'}
            className={'bg-green-400 font-bold p-4 rounded-md'}
          >
            Login to Your Account{' '}
          </button>

          <a
            href={'#'}
            className={'self-center text-gray-800 underline underline-offset-2'}
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
