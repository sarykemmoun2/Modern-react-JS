import React from 'react';

const { Route, Redirect } = require("react-router-dom");

const PrivateRoute = ({ component, ...rest }) => {
  const currentUser = "null"; //handle saved users
  const Component = component;
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
            <Redirect to="login" />
          );
      }}
    />
  );
};

export default PrivateRoute;
