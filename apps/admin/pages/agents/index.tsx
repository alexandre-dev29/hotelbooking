import styles from './index.module.scss';
import { LayoutProtected } from '@hotelbooking/shared-ui-component';

/* eslint-disable-next-line */
export interface AgentsProps {}

export function Agents(props: AgentsProps) {
  return (
    <LayoutProtected>
      <div className={styles['container']}>
        <h1>Welcome to Agents!</h1>
      </div>
    </LayoutProtected>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
      userTypes: ['User'],
    },
  };
}

export default Agents;
