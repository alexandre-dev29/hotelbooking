import { registerEnumType } from '@nestjs/graphql';

export enum RoomTypeEnum {
  Luxury = 'Luxury',
  Normal = 'Normal',
}
registerEnumType(RoomTypeEnum, {
  name: 'RoomTypeEnum',
});
