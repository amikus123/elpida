import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Header from "./containers/Header/Header";
import { Switch, useLocation } from "react-router-dom";
import { Reset } from "styled-reset";
import Global from "./styles/global";
import Home from "./Pages/Home";
import Overlay from "./components/core/Overlay/Overlay";
import { ElementProvider } from "./context/ElementContext";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/themes";
import { DataProvider } from "./context/DataContext";
import SignupPage from "./Pages/SignupPage";

import { UserProvider } from "./context/UserContext";
import LoginPage from "./Pages/LoginPage";
import { ROUTES } from "./constans/routes";
import Dashboard from "./Pages/Dashboard";
import RouteController from "./Pages/CustomRoutes/RouteController";

function App() {
  const location = useLocation();

  return (
    <>
      <Reset />
      <ThemeProvider theme={lightTheme}>
        <UserProvider>
          <DataProvider>
            <ElementProvider>
              <Global />
              <Overlay />
              {location.pathname !== "/login" &&
              location.pathname !== "/signup" ? (
                <Header />
              ) : null}
                {/* <PublicRoute  path={ROUTES.LOGIN} component={LoginPage}></PublicRoute>
                <PublicRoute  path={ROUTES.SIGNUP}component={SignupPage}></PublicRoute>
                <PrivateRoute  path={ROUTES.DASHBOARD}component={Dashboard}></PrivateRoute> */}

                {/* <PublicRoute
                  path={ROUTES.HOME}
                  exact
                  component={Home}
                ></PublicRoute> */}
<Switch>
              <RouteController
                routeType={'public'}
                component={Home}
                path={ROUTES.HOME}
                exact
             />
              {/* // Auth Routes */}
             <RouteController
                routeType={'auth'}
                component={LoginPage}
                path={ROUTES.LOGIN}
                exact
             />
             <RouteController
                routeType={'auth'}
                component={SignupPage}
                path={ROUTES.SIGNUP}
                exact
             />
             {/* // Protected Route */}
             <RouteController
                routeType={'protected'}
                component={Dashboard}
                path={ROUTES.DASHBOARD}
                exact
             />
</Switch>

            </ElementProvider>
          </DataProvider>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
