import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Header from "../commonComponents/BPHeader";
import BookList from './bookList';
import Login from './login';

export const LOGIN_ROUTE = "/login";
export const BOOKS_ROUTE = "/books";
export const BOOK_DETAILS_ROUTE = "/books/:id";
const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to={LOGIN_ROUTE} />} />
        <Route exact path={LOGIN_ROUTE} component={Login} />
        <PrivateRoute exact path={BOOKS_ROUTE} component={BookList} />
        <PrivateRoute exact path={BOOK_DETAILS_ROUTE} component={BookList} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
