import { registerEnumType } from 'type-graphql';

export enum RoomTypeEnum {
  Luxury = 'Luxury',
  Normal = 'Normal',
}
registerEnumType(RoomTypeEnum, {
  name: 'RoomTypeEnum',
});
