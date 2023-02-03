export enum PUBLIC_ROUTES {
  HOME = "/",
  CHECKOUT = "/checkout",
  ORDERS = "/orders",
  CATEGORIES = "/categories",
}

export enum AUTH_ROUTES {
  LOGIN = "/login",
  SIGNUP = "/signup",
}
export const noHeader = ["/login", "/signup", "login", "signup"];

export enum PROTECTED_ROUTES {
  DASHBOARD = "/dashboard",
  INVENTORY = "/dashboard/categories",
  BEST_SELLERS = "/dashboard/best_sellers",
  PROMOTED_CARDS = "/dashboard/promoted_cards",
  HOME_IMAGES = "/dashboard/home_images",
}
export enum DASHBOARD_ROUTES {
  INVENTORY = "/dashboard/categories",
  BEST_SELLERS = "/dashboard/best_sellers",
  PROMOTED_CARDS = "/dashboard/promoted_cards",
  HOME_IMAGES = "/dashboard/home_images",
}
export enum MODALS {
  LOCATION = "location",
}
