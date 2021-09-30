import React, { useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { getBookById } from "./graphql/queries/book";
import './App.css';

function App() {

  const [book, setBook] = useState(null);
  const getBook = async () => {
    // hacer la call a la api de appsync
    // BookId (hardcodeado en "Create item") ---> 5fa2ds65f2das65f1s6
    const book  = await API.graphql(graphqlOperation(getBookById, {id: "5fa2ds65f2das65f1s6"}));
    setBook(book.data.getBookById);
  }

  const viewBook = () => {
    if (book) {
      return(<article>
        <h3>{book.title}</h3>
        <p>{book.description}</p>
        <p>{book.author}</p>
        <h4>{book.price}</h4>
      </article>)
    }
  }

  return (
    <div>
      <AmplifySignOut />
      <section>
        <button onClick={()=> getBook()}>Get book details</button>
        <hr />
        {viewBook()}
        </section>
    </div>
  );
}

export default withAuthenticator(App);
