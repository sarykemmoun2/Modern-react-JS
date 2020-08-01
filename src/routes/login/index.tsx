import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { BOOKS_ROUTE, BOOK_DETAILS_ROUTE } from '../Router';

const Login: React.FC = () => {

    const history = useHistory();
    const login = () => {
        //login from server then
        // history.replace({pathname: BOOKS_ROUTE);
        history.replace(BOOK_DETAILS_ROUTE.replace(":id", "1"))

    }
    return <button onClick={login}>התחבר</button>;
}
export default Login;