import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Switch, useLocation } from "react-router-dom";
import { Reset } from "styled-reset";
import Global from "./styles/global";
import Home from "./Pages/PublicPages/Home/Home";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/themes";

import LoginPage from "./Pages/AuthPages/LoginPage";
import { ROUTES } from "./constans/routes";
import Dashboard from "./Pages/ProtectedPages/Dashboard/Dashboard";
import RouteController from "./components/CustomRoutes/RouteController";
import { useContext, useEffect } from "react";
import { ElementContext } from "./context/ElementContext";
import CategoryPage from "./Pages/PublicPages/CategoryPage/CategoryPage";
import ProductPage from "./Pages/PublicPages/ProductPage/ProductPage";
import Header from "./components/singleUse/Header/Header";
import Overlay from "./components/singleUse/Overlay/Overlay";
import SignupPage from "./Pages/AuthPages/SignupPage";
import ProductListPage from "./Pages/PublicPages/ProductListPage/ProductListPage";
import IncorrectPath from "./Pages/PublicPages/IncorrectPath/IncorrectPath";
function App() {
  const location = useLocation();
  const { reset } = useContext(ElementContext);

  useEffect(() => {
    // reset element(modal,overlay) status on location change
    console.log(location.pathname);
    reset();
  }, [location, reset]);
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
            path={"/categories/:category/"}
            exact
          />
          <RouteController
            routeType="public"
            component={ProductPage}
            path={"/categories/:category/:item"}
            exact
          />
    

          {/*  Auth Routes, only non logged user can access them */}

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
          {/*  Protected Route only auth user can access them */}
          <RouteController
            routeType="protected"
            component={Dashboard}
            path={ROUTES.DASHBOARD}
            exact
          />

<RouteController
            routeType="public"
            component={IncorrectPath}
            path={"/*"}
            exact
          />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
