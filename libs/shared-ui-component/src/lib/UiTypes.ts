export enum ErrorTypeGraphQl {
  Network,
  Request,
}

export interface RegisterFormElement {
  phoneNumber: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
}

export interface LoginFormElement {
  phoneNumber: string;
  password: string;
}
