import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Login!</h1>
    </div>
  );
}

export default Login;
