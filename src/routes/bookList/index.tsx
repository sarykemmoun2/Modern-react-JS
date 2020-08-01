import React, { useState, useEffect } from 'react';
import { useParams, useRouteMatch } from "react-router-dom";
import BookHeader from './BooksHeader';
import data from '../../data.json';
import BookItem from './BookItem';
import { useBookContext } from '../../contexts/booksContexts';
import { getDataFromServer } from '../../APIs';
import { BOOK_DETAILS_ROUTE } from '../Router';

const BookList: React.FC = () => {
    const [chosenBook, setChosenBook] = useState<string>();

    const { currentBook, booksList, setBooksList } = useBookContext();

    const params = useParams();
    const { id } = useRouteMatch(BOOK_DETAILS_ROUTE).params;

    console.log('route params', params.id, id); //same
    
    const loadData = async () => {
        const dataFromServer = await getDataFromServer();
        setBooksList(dataFromServer);
    }

    useEffect(() => {
        // load
        loadData();
        // .then((res) => {
        //     console.log('res after then', res);

        // });
        // setTimeout(() => {
        //     //Use useRef for up-to-date values
        // }, 5000);

        return () => {
            console.log('Component unmounted');
            // removeListenters;
        }//on unmount
    }, []);// on mount

    useEffect(() => {
        console.log('Component rerendered');

    });// on every state/prop change


    useEffect(() => {
        console.log(`Chosen book changed to ${chosenBook}`);
    }, [chosenBook]);// on specific state/prop change

    return (<>
        <BookHeader />
        <div> ספר נבחר {currentBook.name}</div>
        {/* With state */}
        {/* {Object.keys(data).map(item =>
            <button onClick={() => {
                setChosenBook(data[item].name);

            }}>{data[item].name}</button>
        )} */}
        {/*
        With Context
        */}
        {booksList ? Object.keys(booksList).map(item =>
            <BookItem item={booksList[item]} />
        ) : <div>Loading</div>}
    </>)
}
export default BookList;