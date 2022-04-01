import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';

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
const defaultOptions = {} as const;
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
  emailAddress?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  location: Scalars['String'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
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
  AskingForOtpCode: Scalars['Boolean'];
  ConfirmPhoneNumber: Scalars['Boolean'];
  RegisterUser: User;
  createUser: User;
  loginUser: Scalars['LoginResponse'];
  removeUser: User;
  updateUser: User;
};

export type MutationAskingForOtpCodeArgs = {
  phoneNumber: Scalars['String'];
};

export type MutationConfirmPhoneNumberArgs = {
  otpCode: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type MutationRegisterUserArgs = {
  emailAddress?: InputMaybe<Scalars['String']>;
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
  userId: Scalars['String'];
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
  getAllUsers: Array<User>;
  getOneUser: User;
};

export type QueryGetOneUserArgs = {
  userId: Scalars['String'];
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
  emailAddress?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  location?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  Role?: Maybe<Role>;
  createdAt?: Maybe<Scalars['DateTime']>;
  emailAddress?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  isPhoneConfirmed: Scalars['Boolean'];
  lastName: Scalars['String'];
  location: Scalars['String'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  reservations: Array<Reservation>;
  role: Role;
  roleRoleId?: Maybe<Scalars['String']>;
  tokens: Array<Tokens>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['ID'];
};

export type _Service = {
  __typename?: '_Service';
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']>;
};

export type LoginUserMutationVariables = Exact<{
  phoneNumber: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginUserMutation = { __typename?: 'Mutation'; loginUser: any };

export type RegisterUserMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  location?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
}>;

export type RegisterUserMutation = {
  __typename?: 'Mutation';
  RegisterUser: {
    __typename?: 'User';
    userId: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    location: string;
  };
};

export type AskingForOtpCodeMutationVariables = Exact<{
  phoneNumber: Scalars['String'];
}>;

export type AskingForOtpCodeMutation = {
  __typename?: 'Mutation';
  AskingForOtpCode: boolean;
};

export type ConfirmPhoneNumberMutationVariables = Exact<{
  otpCode: Scalars['String'];
  phoneNumber: Scalars['String'];
}>;

export type ConfirmPhoneNumberMutation = {
  __typename?: 'Mutation';
  ConfirmPhoneNumber: boolean;
};

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllUsersQuery = {
  __typename?: 'Query';
  getAllUsers: Array<{
    __typename?: 'User';
    userId: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    location: string;
    isPhoneConfirmed: boolean;
    role: {
      __typename?: 'Role';
      roleId: string;
      userRole: string;
      createdAt?: any | null;
      updatedAt?: any | null;
    };
  }>;
};

export const LoginUserDocument = gql`
  mutation loginUser($phoneNumber: String!, $password: String!) {
    loginUser(phoneNumber: $phoneNumber, password: $password)
  }
`;
export type LoginUserMutationFn = Apollo.MutationFunction<
  LoginUserMutation,
  LoginUserMutationVariables
>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      phoneNumber: // value for 'phoneNumber'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginUserMutation,
    LoginUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(
    LoginUserDocument,
    options
  );
}
export type LoginUserMutationHookResult = ReturnType<
  typeof useLoginUserMutation
>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<
  LoginUserMutation,
  LoginUserMutationVariables
>;
export const RegisterUserDocument = gql`
  mutation RegisterUser(
    $firstName: String!
    $lastName: String!
    $location: String
    $password: String!
    $phoneNumber: String!
  ) {
    RegisterUser(
      firstName: $firstName
      lastName: $lastName
      phoneNumber: $phoneNumber
      password: $password
      location: $location
    ) {
      userId
      phoneNumber
      firstName
      lastName
      location
    }
  }
`;
export type RegisterUserMutationFn = Apollo.MutationFunction<
  RegisterUserMutation,
  RegisterUserMutationVariables
>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      location: // value for 'location'
 *      password: // value for 'password'
 *      phoneNumber: // value for 'phoneNumber'
 *   },
 * });
 */
export function useRegisterUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterUserMutation,
    RegisterUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RegisterUserMutation,
    RegisterUserMutationVariables
  >(RegisterUserDocument, options);
}
export type RegisterUserMutationHookResult = ReturnType<
  typeof useRegisterUserMutation
>;
export type RegisterUserMutationResult =
  Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<
  RegisterUserMutation,
  RegisterUserMutationVariables
>;
export const AskingForOtpCodeDocument = gql`
  mutation AskingForOtpCode($phoneNumber: String!) {
    AskingForOtpCode(phoneNumber: $phoneNumber)
  }
`;
export type AskingForOtpCodeMutationFn = Apollo.MutationFunction<
  AskingForOtpCodeMutation,
  AskingForOtpCodeMutationVariables
>;

/**
 * __useAskingForOtpCodeMutation__
 *
 * To run a mutation, you first call `useAskingForOtpCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAskingForOtpCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [askingForOtpCodeMutation, { data, loading, error }] = useAskingForOtpCodeMutation({
 *   variables: {
 *      phoneNumber: // value for 'phoneNumber'
 *   },
 * });
 */
export function useAskingForOtpCodeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AskingForOtpCodeMutation,
    AskingForOtpCodeMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AskingForOtpCodeMutation,
    AskingForOtpCodeMutationVariables
  >(AskingForOtpCodeDocument, options);
}
export type AskingForOtpCodeMutationHookResult = ReturnType<
  typeof useAskingForOtpCodeMutation
>;
export type AskingForOtpCodeMutationResult =
  Apollo.MutationResult<AskingForOtpCodeMutation>;
export type AskingForOtpCodeMutationOptions = Apollo.BaseMutationOptions<
  AskingForOtpCodeMutation,
  AskingForOtpCodeMutationVariables
>;
export const ConfirmPhoneNumberDocument = gql`
  mutation ConfirmPhoneNumber($otpCode: String!, $phoneNumber: String!) {
    ConfirmPhoneNumber(phoneNumber: $phoneNumber, otpCode: $otpCode)
  }
`;
export type ConfirmPhoneNumberMutationFn = Apollo.MutationFunction<
  ConfirmPhoneNumberMutation,
  ConfirmPhoneNumberMutationVariables
>;

/**
 * __useConfirmPhoneNumberMutation__
 *
 * To run a mutation, you first call `useConfirmPhoneNumberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmPhoneNumberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmPhoneNumberMutation, { data, loading, error }] = useConfirmPhoneNumberMutation({
 *   variables: {
 *      otpCode: // value for 'otpCode'
 *      phoneNumber: // value for 'phoneNumber'
 *   },
 * });
 */
export function useConfirmPhoneNumberMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ConfirmPhoneNumberMutation,
    ConfirmPhoneNumberMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ConfirmPhoneNumberMutation,
    ConfirmPhoneNumberMutationVariables
  >(ConfirmPhoneNumberDocument, options);
}

export type ConfirmPhoneNumberMutationHookResult = ReturnType<
  typeof useConfirmPhoneNumberMutation
>;
export type ConfirmPhoneNumberMutationResult =
  Apollo.MutationResult<ConfirmPhoneNumberMutation>;
export type ConfirmPhoneNumberMutationOptions = Apollo.BaseMutationOptions<
  ConfirmPhoneNumberMutation,
  ConfirmPhoneNumberMutationVariables
>;
export const GetAllUsersDocument = gql`
  query getAllUsers {
    getAllUsers {
      userId
      firstName
      lastName
      phoneNumber
      location
      isPhoneConfirmed
      role {
        roleId
        userRole
        createdAt
        updatedAt
      }
    }
  }
`;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllUsersQuery,
    GetAllUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(
    GetAllUsersDocument,
    options
  );
}

export function useGetAllUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllUsersQuery,
    GetAllUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(
    GetAllUsersDocument,
    options
  );
}

export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<
  typeof useGetAllUsersLazyQuery
>;
export type GetAllUsersQueryResult = Apollo.QueryResult<
  GetAllUsersQuery,
  GetAllUsersQueryVariables
>;
