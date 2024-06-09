import { useRoutes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Product from "../pages/Product";
import Pricing from "../pages/Pricing";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/Login";
import AppLayout from "../pages/AppLayout";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/product",
      element: <Product />,
    },
    { path: "/pricing", element: <Pricing /> },
    { path: "/login", element: <Login /> },
    { path: "/app", element: <AppLayout /> },
    { path: "*", element: <PageNotFound /> },
  ]);
  return routes;
};

export default Router;
