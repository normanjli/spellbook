import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type CharObject = {
  class: Scalars['String'];
  name: Scalars['String'];
  user: Scalars['String'];
};

export type CharResponse = {
  __typename?: 'CharResponse';
  character?: Maybe<Character>;
  errors?: Maybe<Scalars['String']>;
};

export type Character = {
  __typename?: 'Character';
  class: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addChar?: Maybe<CharResponse>;
  charMe?: Maybe<Array<Character>>;
  register?: Maybe<UserResponse>;
};


export type MutationAddCharArgs = {
  options: CharObject;
};


export type MutationCharMeArgs = {
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UserObject;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  character: Array<Scalars['Float']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserObject = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type RegularUserFragment = { __typename?: 'User', id: number, name: string, email: string };

export type AddCharMutationVariables = Exact<{
  options: CharObject;
}>;


export type AddCharMutation = { __typename?: 'Mutation', addChar?: { __typename?: 'CharResponse', errors?: string | null | undefined, character?: { __typename?: 'Character', user: number, name: string, class: string } | null | undefined } | null | undefined };

export type RegisterMutationVariables = Exact<{
  options: UserObject;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename?: 'UserResponse', errors?: string | null | undefined, user?: { __typename?: 'User', id: number, name: string, email: string } | null | undefined } | null | undefined };

export type CharMeMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type CharMeMutation = { __typename?: 'Mutation', charMe?: Array<{ __typename?: 'Character', name: string, class: string }> | null | undefined };

export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  name
  email
}
    `;
export const AddCharDocument = gql`
    mutation AddChar($options: CharObject!) {
  addChar(options: $options) {
    errors
    character {
      user
      name
      class
    }
  }
}
    `;

export function useAddCharMutation() {
  return Urql.useMutation<AddCharMutation, AddCharMutationVariables>(AddCharDocument);
};
export const RegisterDocument = gql`
    mutation Register($options: UserObject!) {
  register(options: $options) {
    errors
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const CharMeDocument = gql`
    mutation CharMe($email: String!) {
  charMe(email: $email) {
    name
    class
  }
}
    `;

export function useCharMeMutation() {
  return Urql.useMutation<CharMeMutation, CharMeMutationVariables>(CharMeDocument);
};