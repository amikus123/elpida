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
import PromotedCards from "./Pages/ProtectedPages/PromotedCards/PromotedCards";
import BestSellers from "./Pages/ProtectedPages/BestSelllers/BestSellers";
import Inventory from "./Pages/ProtectedPages/Inventory/Inventory";
import SearchResultPage from "./Pages/PublicPages/SearchResult/SearchResultPage";
import Checkout from "./Pages/PublicPages/Checkout/Checkout";
import Failure from "./Pages/PublicPages/Failure";
import Success from "./Pages/PublicPages/Success";
import ScrollToTop from "./components/CustomRoutes/ScrollToTop";
function App() {
  const location = useLocation();
  const { reset } = useContext(ElementContext);

  useEffect(() => {
    // reset element(modal,overlay) status on location change
    reset();
    // if restes is included it always fires
  }, [location]);
  return (
    <>
      <Reset />
      <ThemeProvider theme={lightTheme}>
        <Global />
        <Overlay />
        <Snackbar />
        {noHeader.indexOf(location.pathname) !== -1 ? null : <Header />}
        <ScrollToTop>
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
              component={Checkout}
              path={PUBLIC_ROUTES.CHECKOUT}
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
              component={Failure}
              path={"/fail"}
              exact
            />
            <RouteController
              routeType="public"
              component={Success}
              path={"/success"}
              exact
            />
            <RouteController
              routeType="public"
              component={SearchResultPage}
              path={"/search/:category/:title"}
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
              component={BestSellers}
              path={PROTECTED_ROUTES.BEST_SELLERS}
              exact
            />
            <RouteController
              routeType="protected"
              component={Inventory}
              path={PROTECTED_ROUTES.INVENTORY}
              exact
            />
            <RouteController
              routeType="public"
              component={IncorrectPath}
              path={"/*"}
            />
          </Switch>
        </ScrollToTop>
      </ThemeProvider>
    </>
  );
}

export default App;
