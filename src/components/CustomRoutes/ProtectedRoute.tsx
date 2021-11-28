import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AUTH_ROUTES } from "../../constans/routes";
import { UserContext } from "../../context/UserContext";
import { DashboardProvider } from "../../context/DashboardContext";

/**
 * Redirect users from auth pages to home page after login.
 */
const ProtectedRoute = ({
  component,
  ...rest
}: {
  component: React.ReactNode;
}) => {
  const { currentUser } = useContext(UserContext);
  const renderElement = (Component: any, routerProps: any) => {
    return (
      <>
        <Component {...routerProps} />
      </>
    );
  };
  // w
  return (
    <Route
      {...rest}
      render={(routerProps) => {
        return currentUser !== null ? (
          <DashboardProvider>
            {renderElement(component, routerProps)}
          </DashboardProvider>
        ) : (
          <Redirect path="" to={{ pathname: AUTH_ROUTES.SIGNUP }} />
        );
      }}
    />
  );
};

export default ProtectedRoute;
