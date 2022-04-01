import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Role {
  @Field((_type) => ID)
  roleId: string;

  @Field()
  userRole: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  // skip overwrite 👇
}
