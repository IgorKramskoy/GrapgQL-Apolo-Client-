import React from "react";
import './styles.scss'
import Location from "./components/Location/location";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import TodoList from "./components/todoList/todoList";


const client = new ApolloClient({
    uri: 'https://flyby-router-demo.herokuapp.com/',
    cache: new InMemoryCache(),
});



function App() {
  return (
    <div className='box'>
      <h1 >
        ToDoList
      </h1>
        <TodoList/>
        <ApolloProvider client={client}>
          <Location/>
        </ApolloProvider>
    </div>
  );
}

export default App;
