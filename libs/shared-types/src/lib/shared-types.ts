import { Scalar } from '@nestjs/graphql';

export function sharedTypes(): string {
  return 'shared-types';
}

@Scalar('LoginResponse')
export class LoginResponse {
  accessToken: string;
  user: any;
}
