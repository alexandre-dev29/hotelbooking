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
};

export type CreateUserInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  removeUser: User;
  updateUser: User;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  user: User;
};

export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type UpdateUserInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type _Service = {
  __typename?: '_Service';
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']>;
};
