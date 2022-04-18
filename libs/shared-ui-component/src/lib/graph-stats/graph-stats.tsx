import { Chart, LineAdvance } from 'bizcharts';
import { faker } from '@faker-js/faker';
import { FaCalendarDay } from 'react-icons/fa';
import { Card } from '@nextui-org/react';

/* eslint-disable-next-line */
export interface GraphStatsProps {}

export interface GraphData {
  month: string;
  city: string;
  money: number;
}

const data: GraphData[] = [];

export function GraphStats(props: GraphStatsProps) {
  for (let i = 0; i < 30; i++) {
    data.push({
      city: 'reservation',
      month: i.toString(),
      money: faker.datatype.float({ min: 1000, max: 5000 }),
    });
  }
  return (
    <div className={'mt-5  w-full'}>
      <h3 className={'font-body font-black tracking-wider uppercase text-lg'}>
        Reservation Statistics
      </h3>

      <Card className={'bg-white p-4'}>
        <div className={'px-12 py-2 flex'}>
          <FaCalendarDay className={'text-xl text-teal-500 m-0'} />
          <p className={'m-0 ml-2 '}>
            20 - 26 Nov, <span className={'text-gray-500'}>2021</span>
          </p>
        </div>
        <Chart padding={[10, 20, 50, 40]} autoFit height={'30vh'} data={data}>
          <LineAdvance
            shape="smooth"
            point
            area
            position="month*money"
            color="city"
            style={{}}
          />
        </Chart>
      </Card>
    </div>
  );
}

export default GraphStats;
