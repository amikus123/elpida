import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Header from "./containers/Header/Header";
import { Switch, useLocation } from "react-router-dom";
import { Reset } from "styled-reset";
import Global from "./styles/global";
import Home from "./Pages/Home/Home";
import Overlay from "./components/core/Overlay/Overlay";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/themes";
import SignupPage from "./Pages/SignupPage";

import LoginPage from "./Pages/LoginPage";
import { ROUTES } from "./constans/routes";
import Dashboard from "./Pages/Dashboard";
import RouteController from "./Pages/CustomRoutes/RouteController";
import { useContext, useEffect } from "react";
import { ElementContext } from "./context/ElementContext";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import ProductListPage from "./Pages/ProductListPage/ProductListPage";

function App() {
  const location = useLocation();
  const { reset } = useContext(ElementContext);

  useEffect(() => {
    // reset element(modal,overlay) status on location change
    console.log(location.pathname);
    reset();
  }, [location]);
  return (
    <>
      <Reset />
      <ThemeProvider theme={lightTheme}>
        <Global />
        <Overlay />
        {location.pathname !== "/login" && location.pathname !== "/signup" ? (
          <Header />
        ) : null}

        <Switch>
          <RouteController
            routeType="public"
            component={Home}
            path={ROUTES.HOME}
            exact
          />
          <RouteController
            routeType="public"
            component={CategoryPage}
            path={ROUTES.CATEGORIES}
            exact
          />
          <RouteController
            routeType="public"
            component={ProductListPage}
            path={"/categories/:slug"}
            exact
          />

          {/* // Auth Routes */}
          <RouteController
            routeType="auth"
            component={LoginPage}
            path={ROUTES.LOGIN}
            exact
          />
          <RouteController
            routeType="auth"
            component={SignupPage}
            path={ROUTES.SIGNUP}
            exact
          />
          {/* // Protected Route */}
          <RouteController
            routeType="protected"
            component={Dashboard}
            path={ROUTES.DASHBOARD}
            exact
          />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
