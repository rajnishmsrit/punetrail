import React, {useState} from 'react';
//import { graphql } from 'gatsby';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

// This query is executed at run time by Apollo.
const LIST_BOOKS = gql`
  {
    books {
      title
      author
    }
  }
`;

// create a component that renders a select input for coutries
function Index() {
  const {data, loading, error} = useQuery(LIST_BOOKS);

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  return (
    <p>
      {data.books.map(book => (
        <p><b>{book.title}</b> : {book.author}
        </p>
      ))}
    </p>
  );
}

export default Index;