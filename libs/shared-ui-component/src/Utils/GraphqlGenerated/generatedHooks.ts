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

export type Agents = {
  __typename?: 'Agents';
  Hotel: Hotel;
  Role: Role;
  agentId: Scalars['ID'];
  agentName: Scalars['String'];
  agentPhoneNumber: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  hotelHotelId?: Maybe<Scalars['String']>;
  hotelId: Scalars['String'];
  roleId: Scalars['String'];
  roleRoleId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CreateAgentInput = {
  /** The Agent Name */
  agentName: Scalars['String'];
  /** The Agent Phone Number */
  agentPhoneNumber: Scalars['String'];
  /** The Id Of the hotel */
  hotelId: Scalars['String'];
  /** The Role Id */
  roleId: Scalars['String'];
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
  createdAt?: Maybe<Scalars['DateTime']>;
  hotelId: Scalars['ID'];
  hotelName: Scalars['String'];
  location: Scalars['String'];
  owner: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  AskingForOtpCode: Scalars['Boolean'];
  ConfirmPhoneNumber: Scalars['Boolean'];
  RegisterUser: User;
  createAgent: Agents;
  createUser: User;
  loginUser: Scalars['LoginResponse'];
  removeAgent: Agents;
  removeUser: User;
  updateAgent: Agents;
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

export type MutationCreateAgentArgs = {
  createAgentInput: CreateAgentInput;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationLoginUserArgs = {
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type MutationRemoveAgentArgs = {
  id: Scalars['String'];
};

export type MutationRemoveUserArgs = {
  userId: Scalars['String'];
};

export type MutationUpdateAgentArgs = {
  updateAgentInput: UpdateAgentInput;
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
  getAllAgents: Array<Agents>;
  getAllUsers: Array<User>;
  getOneAgent: Agents;
  getOneUser: User;
};

export type QueryGetOneAgentArgs = {
  id: Scalars['String'];
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

export type RoomType = {
  __typename?: 'RoomType';
  Ac: Scalars['Boolean'];
  capacity: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  heater: Scalars['Boolean'];
  price: Scalars['Float'];
  rating?: Maybe<Scalars['Int']>;
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

export type UpdateAgentInput = {
  agentId: Scalars['String'];
  agentName: Scalars['String'];
  agentPhoneNumber: Scalars['String'];
  /** The Id Of the hotel */
  hotelId?: InputMaybe<Scalars['String']>;
  roleId: Scalars['String'];
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

export type CreateAgentMutationVariables = Exact<{
  createAgentInput: CreateAgentInput;
}>;

export type CreateAgentMutation = {
  __typename?: 'Mutation';
  createAgent: {
    __typename?: 'Agents';
    agentId: string;
    agentName: string;
    agentPhoneNumber: string;
    createdAt?: any | null;
    updatedAt?: any | null;
    roleId: string;
    Hotel: { __typename?: 'Hotel'; hotelName: string; hotelId: string };
    Role: {
      __typename?: 'Role';
      roleId: string;
      userRole: string;
      createdAt?: any | null;
      updatedAt?: any | null;
    };
  };
};

export type UpdateAgentMutationVariables = Exact<{
  updateAgentInput: UpdateAgentInput;
}>;

export type UpdateAgentMutation = {
  __typename?: 'Mutation';
  updateAgent: { __typename?: 'Agents'; agentId: string; agentName: string };
};

export type RemoveAgentMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type RemoveAgentMutation = {
  __typename?: 'Mutation';
  removeAgent: { __typename?: 'Agents'; agentId: string };
};

export type GetAllAgentQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllAgentQuery = {
  __typename?: 'Query';
  getAllAgents: Array<{
    __typename?: 'Agents';
    agentId: string;
    agentName: string;
    agentPhoneNumber: string;
    createdAt?: any | null;
    updatedAt?: any | null;
    roleId: string;
    Hotel: { __typename?: 'Hotel'; hotelName: string; hotelId: string };
    Role: {
      __typename?: 'Role';
      roleId: string;
      userRole: string;
      createdAt?: any | null;
      updatedAt?: any | null;
    };
  }>;
};

export type GetOneAgentQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetOneAgentQuery = {
  __typename?: 'Query';
  getOneAgent: {
    __typename?: 'Agents';
    agentId: string;
    agentName: string;
    agentPhoneNumber: string;
    createdAt?: any | null;
    updatedAt?: any | null;
    roleId: string;
    Hotel: { __typename?: 'Hotel'; hotelName: string; hotelId: string };
    Role: {
      __typename?: 'Role';
      roleId: string;
      userRole: string;
      createdAt?: any | null;
      updatedAt?: any | null;
    };
  };
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

export type GetOneUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetOneUserQuery = {
  __typename?: 'Query';
  getOneUser: {
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
  };
};

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;

export type CreateUserMutation = {
  __typename?: 'Mutation';
  createUser: {
    __typename?: 'User';
    userId: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    location: string;
    isPhoneConfirmed: boolean;
  };
};

export type UpdateUserMutationVariables = Exact<{
  updateUserInput: UpdateUserInput;
}>;

export type UpdateUserMutation = {
  __typename?: 'Mutation';
  updateUser: {
    __typename?: 'User';
    userId: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    location: string;
    isPhoneConfirmed: boolean;
  };
};

export type RemoveUserMutationVariables = Exact<{
  userId: Scalars['String'];
}>;

export type RemoveUserMutation = {
  __typename?: 'Mutation';
  removeUser: { __typename?: 'User'; userId: string };
};

export const CreateAgentDocument = gql`
  mutation createAgent($createAgentInput: CreateAgentInput!) {
    createAgent(createAgentInput: $createAgentInput) {
      agentId
      agentName
      agentPhoneNumber
      createdAt
      updatedAt
      roleId
      Hotel {
        hotelName
        hotelId
      }
      Role {
        roleId
        userRole
        createdAt
        updatedAt
      }
    }
  }
`;
export type CreateAgentMutationFn = Apollo.MutationFunction<
  CreateAgentMutation,
  CreateAgentMutationVariables
>;

/**
 * __useCreateAgentMutation__
 *
 * To run a mutation, you first call `useCreateAgentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAgentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAgentMutation, { data, loading, error }] = useCreateAgentMutation({
 *   variables: {
 *      createAgentInput: // value for 'createAgentInput'
 *   },
 * });
 */
export function useCreateAgentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAgentMutation,
    CreateAgentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateAgentMutation, CreateAgentMutationVariables>(
    CreateAgentDocument,
    options
  );
}

export type CreateAgentMutationHookResult = ReturnType<
  typeof useCreateAgentMutation
>;
export type CreateAgentMutationResult =
  Apollo.MutationResult<CreateAgentMutation>;
export type CreateAgentMutationOptions = Apollo.BaseMutationOptions<
  CreateAgentMutation,
  CreateAgentMutationVariables
>;
export const UpdateAgentDocument = gql`
  mutation updateAgent($updateAgentInput: UpdateAgentInput!) {
    updateAgent(updateAgentInput: $updateAgentInput) {
      agentId
      agentName
    }
  }
`;
export type UpdateAgentMutationFn = Apollo.MutationFunction<
  UpdateAgentMutation,
  UpdateAgentMutationVariables
>;

/**
 * __useUpdateAgentMutation__
 *
 * To run a mutation, you first call `useUpdateAgentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAgentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAgentMutation, { data, loading, error }] = useUpdateAgentMutation({
 *   variables: {
 *      updateAgentInput: // value for 'updateAgentInput'
 *   },
 * });
 */
export function useUpdateAgentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateAgentMutation,
    UpdateAgentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateAgentMutation, UpdateAgentMutationVariables>(
    UpdateAgentDocument,
    options
  );
}

export type UpdateAgentMutationHookResult = ReturnType<
  typeof useUpdateAgentMutation
>;
export type UpdateAgentMutationResult =
  Apollo.MutationResult<UpdateAgentMutation>;
export type UpdateAgentMutationOptions = Apollo.BaseMutationOptions<
  UpdateAgentMutation,
  UpdateAgentMutationVariables
>;
export const RemoveAgentDocument = gql`
  mutation removeAgent($id: String!) {
    removeAgent(id: $id) {
      agentId
    }
  }
`;
export type RemoveAgentMutationFn = Apollo.MutationFunction<
  RemoveAgentMutation,
  RemoveAgentMutationVariables
>;

/**
 * __useRemoveAgentMutation__
 *
 * To run a mutation, you first call `useRemoveAgentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveAgentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeAgentMutation, { data, loading, error }] = useRemoveAgentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveAgentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveAgentMutation,
    RemoveAgentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemoveAgentMutation, RemoveAgentMutationVariables>(
    RemoveAgentDocument,
    options
  );
}

export type RemoveAgentMutationHookResult = ReturnType<
  typeof useRemoveAgentMutation
>;
export type RemoveAgentMutationResult =
  Apollo.MutationResult<RemoveAgentMutation>;
export type RemoveAgentMutationOptions = Apollo.BaseMutationOptions<
  RemoveAgentMutation,
  RemoveAgentMutationVariables
>;
export const GetAllAgentDocument = gql`
  query getAllAgent {
    getAllAgents {
      agentId
      agentName
      agentPhoneNumber
      createdAt
      updatedAt
      roleId
      Hotel {
        hotelName
        hotelId
      }
      Role {
        roleId
        userRole
        createdAt
        updatedAt
      }
    }
  }
`;

/**
 * __useGetAllAgentQuery__
 *
 * To run a query within a React component, call `useGetAllAgentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAgentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAgentQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllAgentQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllAgentQuery,
    GetAllAgentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllAgentQuery, GetAllAgentQueryVariables>(
    GetAllAgentDocument,
    options
  );
}

export function useGetAllAgentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllAgentQuery,
    GetAllAgentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllAgentQuery, GetAllAgentQueryVariables>(
    GetAllAgentDocument,
    options
  );
}

export type GetAllAgentQueryHookResult = ReturnType<typeof useGetAllAgentQuery>;
export type GetAllAgentLazyQueryHookResult = ReturnType<
  typeof useGetAllAgentLazyQuery
>;
export type GetAllAgentQueryResult = Apollo.QueryResult<
  GetAllAgentQuery,
  GetAllAgentQueryVariables
>;
export const GetOneAgentDocument = gql`
  query getOneAgent($id: String!) {
    getOneAgent(id: $id) {
      agentId
      agentName
      agentPhoneNumber
      createdAt
      updatedAt
      roleId
      Hotel {
        hotelName
        hotelId
      }
      Role {
        roleId
        userRole
        createdAt
        updatedAt
      }
    }
  }
`;

/**
 * __useGetOneAgentQuery__
 *
 * To run a query within a React component, call `useGetOneAgentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneAgentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneAgentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOneAgentQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetOneAgentQuery,
    GetOneAgentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOneAgentQuery, GetOneAgentQueryVariables>(
    GetOneAgentDocument,
    options
  );
}

export function useGetOneAgentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOneAgentQuery,
    GetOneAgentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOneAgentQuery, GetOneAgentQueryVariables>(
    GetOneAgentDocument,
    options
  );
}

export type GetOneAgentQueryHookResult = ReturnType<typeof useGetOneAgentQuery>;
export type GetOneAgentLazyQueryHookResult = ReturnType<
  typeof useGetOneAgentLazyQuery
>;
export type GetOneAgentQueryResult = Apollo.QueryResult<
  GetOneAgentQuery,
  GetOneAgentQueryVariables
>;
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
export const GetOneUserDocument = gql`
  query getOneUser($id: String!) {
    getOneUser(userId: $id) {
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
 * __useGetOneUserQuery__
 *
 * To run a query within a React component, call `useGetOneUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOneUserQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetOneUserQuery,
    GetOneUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOneUserQuery, GetOneUserQueryVariables>(
    GetOneUserDocument,
    options
  );
}

export function useGetOneUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOneUserQuery,
    GetOneUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOneUserQuery, GetOneUserQueryVariables>(
    GetOneUserDocument,
    options
  );
}

export type GetOneUserQueryHookResult = ReturnType<typeof useGetOneUserQuery>;
export type GetOneUserLazyQueryHookResult = ReturnType<
  typeof useGetOneUserLazyQuery
>;
export type GetOneUserQueryResult = Apollo.QueryResult<
  GetOneUserQuery,
  GetOneUserQueryVariables
>;
export const CreateUserDocument = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      userId
      firstName
      lastName
      phoneNumber
      location
      isPhoneConfirmed
    }
  }
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      createUserInput: // value for 'createUserInput'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options
  );
}

export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult =
  Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const UpdateUserDocument = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      userId
      firstName
      lastName
      phoneNumber
      location
      isPhoneConfirmed
    }
  }
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      updateUserInput: // value for 'updateUserInput'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options
  );
}

export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult =
  Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const RemoveUserDocument = gql`
  mutation removeUser($userId: String!) {
    removeUser(userId: $userId) {
      userId
    }
  }
`;
export type RemoveUserMutationFn = Apollo.MutationFunction<
  RemoveUserMutation,
  RemoveUserMutationVariables
>;

/**
 * __useRemoveUserMutation__
 *
 * To run a mutation, you first call `useRemoveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserMutation, { data, loading, error }] = useRemoveUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRemoveUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveUserMutation,
    RemoveUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemoveUserMutation, RemoveUserMutationVariables>(
    RemoveUserDocument,
    options
  );
}

export type RemoveUserMutationHookResult = ReturnType<
  typeof useRemoveUserMutation
>;
export type RemoveUserMutationResult =
  Apollo.MutationResult<RemoveUserMutation>;
export type RemoveUserMutationOptions = Apollo.BaseMutationOptions<
  RemoveUserMutation,
  RemoveUserMutationVariables
>;
