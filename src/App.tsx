import React from 'react';
import './App.css';
import { useAddNewBookMutation, useGetBooksQuery } from './graphql/generated';

function App() {

  const Books = useGetBooksQuery();

  const [ AddNewBook, HandleNewbook ] = useAddNewBookMutation({
    refetchQueries: [ 'GetBooks' ]
  });

  if(Books.loading) return <h1>Carregando dados...</h1>

  if(Books.error) return <h1>Error</h1>

  return (
    <>
      <button onClick={async () => {

        await AddNewBook({
          variables: {
            title: 'ola mundo'
          }
        });

      }}>{HandleNewbook.loading ? 'carregando' : 'add new book'}</button>
      <h1>{Books.data?.books.map((data, index) => (
        <p>{data.id} - {data.title}</p>
      ))}</h1>
    </>
  )
}

export default App