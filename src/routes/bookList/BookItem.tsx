import React from 'react';
import { Book } from '../../types';
import { useBookContext } from '../../contexts/booksContexts';

const BookItem: React.FC<{ item: Book }> = ({ item }) => {

    const { setCurrentBook  } = useBookContext();
    
    const chooseBook = () => {
        setCurrentBook(item);
    }
    return <button onClick={chooseBook}>{item.name}</button>;
}
export default BookItem;