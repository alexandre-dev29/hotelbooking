export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  LoginResponse: any;
};

export type CreateUserInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type Hotel = {
  __typename?: 'Hotel';
  Rooms: Array<Room>;
  createdAt?: Maybe<Scalars['DateTime']>;
  hotelId: Scalars['ID'];
  hotelName: Scalars['String'];
  location: Scalars['String'];
  owner: Scalars['String'];
  reserations: Array<Reservation>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  RegisterUser: User;
  createUser: User;
  loginUser: Scalars['LoginResponse'];
  removeUser: User;
  updateUser: User;
};

export type MutationRegisterUserArgs = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  location?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationLoginUserArgs = {
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Payment = {
  __typename?: 'Payment';
  Transation?: Maybe<Transation>;
  createdAt?: Maybe<Scalars['DateTime']>;
  paymentId: Scalars['ID'];
  transationTransactionId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  user: User;
};

export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type Reservation = {
  __typename?: 'Reservation';
  CheckOut?: Maybe<Scalars['DateTime']>;
  Hotel?: Maybe<Hotel>;
  RoomType?: Maybe<RoomType>;
  User?: Maybe<User>;
  balanceAmount: Scalars['Float'];
  checkIn?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  guestList: Scalars['String'];
  hotelId?: Maybe<Scalars['String']>;
  reservationId: Scalars['ID'];
  roomTypeId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type Role = {
  __typename?: 'Role';
  User: Array<User>;
  createdAt?: Maybe<Scalars['DateTime']>;
  roleId: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userRole: Scalars['String'];
};

export type Room = {
  __typename?: 'Room';
  Hotel: Hotel;
  createdAt?: Maybe<Scalars['DateTime']>;
  hotelId: Scalars['String'];
  roomCapacity: Scalars['Int'];
  roomDescription: Scalars['String'];
  roomId: Scalars['ID'];
  roomPrice: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RoomType = {
  __typename?: 'RoomType';
  Ac: Scalars['Boolean'];
  capacity: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  heater: Scalars['Boolean'];
  price: Scalars['Float'];
  rating?: Maybe<Scalars['Int']>;
  reserations: Array<Reservation>;
  roomType: RoomTypeEnum;
  roomTypeDescription: Scalars['String'];
  roomTypeId: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  wifi: Scalars['Boolean'];
};

export enum RoomTypeEnum {
  Luxury = 'Luxury',
  Normal = 'Normal',
}

export type Tokens = {
  __typename?: 'Tokens';
  User: User;
  createdAt?: Maybe<Scalars['DateTime']>;
  token: Scalars['String'];
  tokenId: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type Transation = {
  __typename?: 'Transation';
  Payments: Array<Payment>;
  amountTransation: Scalars['Float'];
  createdAt?: Maybe<Scalars['DateTime']>;
  transactionId: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateUserInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  Role?: Maybe<Role>;
  Tokens: Array<Tokens>;
  createdAt?: Maybe<Scalars['DateTime']>;
  emailAddress?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  isPhoneConfirmed: Scalars['Boolean'];
  lastName: Scalars['String'];
  location: Scalars['String'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  reserations: Array<Reservation>;
  roleRoleId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['ID'];
};

export type _Service = {
  __typename?: '_Service';
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']>;
};
