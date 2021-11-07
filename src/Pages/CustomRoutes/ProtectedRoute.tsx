import React, {  useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { ROUTES } from '../../constans/routes';
import { UserContext } from '../../context/UserContext';
/**
 * Redirect users from auth pages to home page after login.
 */
const ProtectedRoute = ({ component,  ...rest }:{component:any}) => {
  const { currentUser } = useContext(UserContext);

  const  renderElement = (Component: any,routerProps:any) => {
  
    return <><Component   {...routerProps}/></>;
  }
  return (
    <Route
      {...rest}
      render={routerProps => {
        return (
          currentUser !== null
            ? <>{renderElement(component,routerProps)}</>
            : <Redirect
            path=""
                to={{ pathname: ROUTES.SIGNUP }}
              />
        )
      }}
    />
  )
}

export default ProtectedRoute

