import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckOutPage from "../pages/books/CheckOutPage";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/books/OrderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <h1>about</h1>,
      },
      {
        path: "/orders",
        element: <PrivateRoute><OrderPage/></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/cart",
        element: <CartPage/>,
      },
      {
        path: "/checkout",
        element: <PrivateRoute><CheckOutPage/></PrivateRoute>,
      },
      {
        path: "/books/:id",
        element: <SingleBook/>,
      },
    ],
  },
]);

export default router;
