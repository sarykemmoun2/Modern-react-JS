import React from 'react';
import './App.css';
import BookList from './routes/bookList';
import { BookContextProvider } from './contexts/booksContexts';
import AppRouter from './routes/Router';

function App() {
  return (
    <BookContextProvider>
      <div className="App">
        <AppRouter />
      </div>
    </BookContextProvider>
  );
}

export default App;
