import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../constans/routes";
import { UserContext } from "../../context/UserContext";

/**
 * Redirect users from auth pages to home page after login.
 */
const AuthRoute = ({ component, ...rest }: { component: any }) => {
  const { currentUser } = useContext(UserContext);
  const renderElement = (Component: any, routerProps: any) => {
    return (
      <>
        <Component {...routerProps} />
      </>
    );
  };
  return (
    <Route
      {...rest}
      render={(routerProps) => {
        return !currentUser ? (
          <>{renderElement(component, routerProps)}</>
        ) : (
          <Redirect to={{ pathname: PUBLIC_ROUTES.HOME }} />
        );
      }}
    />
  );
};

export default AuthRoute;
