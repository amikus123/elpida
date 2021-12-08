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
import {
  AUTH_ROUTES,
  PROTECTED_ROUTES,
  PUBLIC_ROUTES,
  noHeader,
} from "./constans/routes";
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
import HomeImages from "./Pages/ProtectedPages/HomeImages/HomeImages";
import Snackbar from "./components/singleUse/Snackbar/Snackbar";
import { UserContext } from "./context/UserContext";
import PromotedCards from "./Pages/ProtectedPages/PromotedCards/PromotedCards";
function App() {
  const location = useLocation();
  const { reset } = useContext(ElementContext);
  const { signout } = useContext(UserContext);

  useEffect(() => {
    // reset element(modal,overlay) status on location change
    console.log(location.pathname,noHeader.indexOf(location.pathname) );
    reset();
  }, [location, reset]);
  return (
    <>
      <Reset />
      <ThemeProvider theme={lightTheme}>
        <Global />
        <Overlay />
        <Snackbar />
        {noHeader.indexOf(location.pathname) !== -1 ? null : <Header />}

        <Switch>
          <RouteController
            routeType="public"
            component={Home}
            path={PUBLIC_ROUTES.HOME}
            exact
          />

          <RouteController
            routeType="public"
            component={CategoryPage}
            path={PUBLIC_ROUTES.CATEGORIES}
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
            path={AUTH_ROUTES.LOGIN}
            exact
          />
          <RouteController
            routeType="auth"
            component={SignupPage}
            path={AUTH_ROUTES.SIGNUP}
            exact
          />
          {/*  Protected Route only auth user can access them */}
          <RouteController
            routeType="protected"
            component={Dashboard}
            path={PROTECTED_ROUTES.DASHBOARD}
            exact
          />
          <RouteController
            routeType="protected"
            component={HomeImages}
            path={PROTECTED_ROUTES.HOME_IMAGES}
            exact
          />
               <RouteController
            routeType="protected"
            component={PromotedCards}
            path={PROTECTED_ROUTES.PROMOTED_CARDS}
            exact
          />
               <RouteController
            routeType="protected"
            component={HomeImages}
            path={PROTECTED_ROUTES.HOME_IMAGES}
            exact
          />
               <RouteController
            routeType="protected"
            component={HomeImages}
            path={PROTECTED_ROUTES.HOME_IMAGES}
            exact
          />
          <RouteController
            routeType="public"
            component={IncorrectPath}
            path={"/*"}
            exact
          />
        </Switch>
        <button
          onClick={() => {
            signout();
          }}
        >
          adasdda
        </button>
      </ThemeProvider>
    </>
  );
}

export default App;
