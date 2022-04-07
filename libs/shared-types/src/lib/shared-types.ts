import { Scalar } from '@nestjs/graphql';

export function sharedTypes(): string {
  return 'shared-types';
}

@Scalar('LoginResponse')
export class LoginResponse {
  isPhoneNumberConfirmed: boolean;
  accessToken: string;
  user: any;
}
