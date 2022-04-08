import { FaHeart, FaHome, FaUsers } from 'react-icons/fa';
import { BsShieldFillPlus } from 'react-icons/bs';

/* eslint-disable-next-line */
export interface HotelStatsProps {}

export interface HotelStatsComponentProps {
  title: string;
  subTitle: string;
  iconElement: any;
}

const allData: HotelStatsComponentProps[] = [
  {
    iconElement: (
      <FaUsers
        className={`text-[3rem] bg-red-500 rounded-full p-3 text-white`}
      />
    ),
    subTitle: '2.040',
    title: 'Total clients',
  },
  {
    iconElement: (
      <BsShieldFillPlus
        className={`text-[3rem] bg-orange-500 rounded-full p-3 text-white`}
      />
    ),
    subTitle: '100',
    title: 'Total Agents',
  },
  {
    iconElement: (
      <FaHome
        className={`text-[3rem] bg-teal-500 rounded-full p-3 text-white`}
      />
    ),
    subTitle: '30',
    title: 'Total Rooms',
  },
  {
    iconElement: (
      <FaHeart
        className={`text-[3rem] bg-blue-500 rounded-full p-3 text-white`}
      />
    ),
    subTitle: '120',
    title: 'Total operations',
  },
];

export function HotelStats(props: HotelStatsProps) {
  return (
    <div
      className={
        'w-full bg-white py-4 grid grid-cols-4 shadow-sm transition-all duration-500 hover:shadow-md'
      }
    >
      {allData.map((currentElement, index) => (
        <HotelStatsComponent
          key={index}
          subTitle={currentElement.subTitle}
          title={currentElement.title}
          iconElement={currentElement.iconElement}
        />
      ))}
    </div>
  );
}

export function HotelStatsComponent(props: HotelStatsComponentProps) {
  return (
    <div className={'flex gap-5 items-center justify-center'}>
      {props.iconElement}
      <div className={'flex flex-col'}>
        <p className={'my-0 text-gray-400 font-body font-semibold '}>
          {props.title}
        </p>
        <p className={'my-0 text-gray-700 font-body font-bold'}>
          {props.subTitle}
        </p>
      </div>
    </div>
  );
}

export default HotelStats;
