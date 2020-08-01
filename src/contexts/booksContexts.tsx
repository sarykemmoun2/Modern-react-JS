
import React, { useState } from "react";
import { Book } from '../types';

interface ContentType {
    booksList: Book[];
    setBooksList: (booksList: Book[]) => {};
    currentBook: Book;
    setCurrentBook: (book: Book) => {}
}
export const createBookContextValue = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [booksList, setBooksList] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentBook, setCurrentBook] = useState({});
    return {
        booksList,
        setBooksList,
        currentBook,
        setCurrentBook
    };
};

export const BookContext = React.createContext(null);

export const BookContextProvider = (props) => {
    const value = createBookContextValue();

    return <BookContext.Provider value={value}>
        {props.children}
    </BookContext.Provider>;
};

export const useBookContext = () => React.useContext<ContentType>(BookContext);
