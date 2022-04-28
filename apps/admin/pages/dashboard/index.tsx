import {
  GraphStats,
  HotelStats,
  LatestClients,
} from '@hotelbooking/shared-ui-component';
import { Card, Grid, Row } from '@nextui-org/react';
import { AiFillBell } from 'react-icons/ai';
import { FaArrowRight } from 'react-icons/fa';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  return (
    <div className={'grid grid-cols-4 gap-12 pt-10 px-10'}>
      <div className={'col-span-3 flex flex-col'}>
        <h3 className={'font-body font-black tracking-wider uppercase text-lg'}>
          Dashboard
        </h3>
        <HotelStats />
        <GraphStats />
        <LatestClients />
      </div>
      <div className={''}>
        <h3 className={'font-body font-black tracking-wider uppercase text-lg'}>
          Reports
        </h3>
        <Grid sm={12} md={12}>
          <Card
            css={{ borderRadius: '$xs', boxShadow: '$sm' }}
            className={'transform hover:scale-105'}
          >
            <Card.Body css={{ py: '$4' }}>
              <div className={'flex items-center justify-around py-2'}>
                <AiFillBell
                  className={
                    'transition-all duration-500 text-red-400 rounded-full  text-4xl transform hover:scale-110'
                  }
                />
                <div className={'flex flex-col'}>
                  <p className={'m-0 text-sm font-bold text-gray-500 '}>
                    New reservation
                  </p>
                  <p
                    className={
                      'm-0 text-sm font-display font-medium text-gray-800'
                    }
                  >
                    it was made from Axel Mwenze
                  </p>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <Row justify="space-between">
                <p
                  className={'text-gray-500 text-sm font-display text-gray-600'}
                >
                  1 min ago
                </p>
                <a
                  href="#"
                  className={'text-teal-400 font-bold font-display flex'}
                >
                  Details
                  <FaArrowRight className={'ml-2'} />
                </a>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid sm={12} md={12}>
          <Card
            css={{ borderRadius: '$xs', boxShadow: '$sm' }}
            className={'transform hover:scale-105'}
          >
            <Card.Body css={{ py: '$4' }}>
              <div className={'flex items-center justify-around py-2'}>
                <AiFillBell
                  className={
                    'transition-all duration-500 text-red-400 rounded-full  text-4xl transform hover:scale-110'
                  }
                />
                <div className={'flex flex-col'}>
                  <p className={'m-0 text-sm font-bold text-gray-500 '}>
                    New reservation
                  </p>
                  <p
                    className={
                      'm-0 text-sm font-display font-medium text-gray-800'
                    }
                  >
                    it was made from Axel Mwenze
                  </p>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <Row justify="space-between">
                <p
                  className={'text-gray-500 text-sm font-display text-gray-600'}
                >
                  1 min ago
                </p>
                <a
                  href="#"
                  className={'text-teal-400 font-bold font-display flex'}
                >
                  Details
                  <FaArrowRight className={'ml-2'} />
                </a>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid sm={12} md={12}>
          <Card
            css={{ borderRadius: '$xs', boxShadow: '$sm' }}
            className={'transform hover:scale-105'}
          >
            <Card.Body css={{ py: '$4' }}>
              <div className={'flex items-center justify-around py-2'}>
                <AiFillBell
                  className={
                    'transition-all duration-500 text-red-400 rounded-full  text-4xl transform hover:scale-110'
                  }
                />
                <div className={'flex flex-col'}>
                  <p className={'m-0 text-sm font-bold text-gray-500 '}>
                    New reservation
                  </p>
                  <p
                    className={
                      'm-0 text-sm font-display font-medium text-gray-800'
                    }
                  >
                    it was made from Axel Mwenze
                  </p>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <Row justify="space-between">
                <p
                  className={'text-gray-500 text-sm font-display text-gray-600'}
                >
                  1 min ago
                </p>
                <a
                  href="#"
                  className={'text-teal-400 font-bold font-display flex'}
                >
                  Details
                  <FaArrowRight className={'ml-2'} />
                </a>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      </div>
    </div>
  );
}

export default Dashboard;
