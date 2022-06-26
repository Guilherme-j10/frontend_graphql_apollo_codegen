import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Book = {
  __typename?: 'Book';
  author: Scalars['String'];
  id: Scalars['String'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBook: Scalars['Boolean'];
};


export type MutationAddBookArgs = {
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  books: Array<Book>;
};

export type AddNewBookMutationVariables = Exact<{
  title: Scalars['String'];
}>;


export type AddNewBookMutation = { __typename?: 'Mutation', addBook: boolean };

export type GetBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQuery = { __typename?: 'Query', books: Array<{ __typename?: 'Book', title: string, id: string }> };


export const AddNewBookDocument = gql`
    mutation addNewBook($title: String!) {
  addBook(title: $title)
}
    `;
export type AddNewBookMutationFn = Apollo.MutationFunction<AddNewBookMutation, AddNewBookMutationVariables>;

/**
 * __useAddNewBookMutation__
 *
 * To run a mutation, you first call `useAddNewBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNewBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNewBookMutation, { data, loading, error }] = useAddNewBookMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useAddNewBookMutation(baseOptions?: Apollo.MutationHookOptions<AddNewBookMutation, AddNewBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddNewBookMutation, AddNewBookMutationVariables>(AddNewBookDocument, options);
      }
export type AddNewBookMutationHookResult = ReturnType<typeof useAddNewBookMutation>;
export type AddNewBookMutationResult = Apollo.MutationResult<AddNewBookMutation>;
export type AddNewBookMutationOptions = Apollo.BaseMutationOptions<AddNewBookMutation, AddNewBookMutationVariables>;
export const GetBooksDocument = gql`
    query GetBooks {
  books {
    title
    id
  }
}
    `;

/**
 * __useGetBooksQuery__
 *
 * To run a query within a React component, call `useGetBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
      }
export function useGetBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
        }
export type GetBooksQueryHookResult = ReturnType<typeof useGetBooksQuery>;
export type GetBooksLazyQueryHookResult = ReturnType<typeof useGetBooksLazyQuery>;
export type GetBooksQueryResult = Apollo.QueryResult<GetBooksQuery, GetBooksQueryVariables>;