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
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <h1>about</h1>,
      },
      {
        path: "/orders",
        element: <PrivateRoute><OrderPage /></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <PrivateRoute><CheckOutPage /></PrivateRoute>,
      },
      {
        path: "/books/:id",
        element: <SingleBook />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin/>
  },
  {
    path: "/dashboard",
    element: <AdminRoute> <div>Admin DashBoard</div> </AdminRoute>,
    children: [
      {
        path: "",
        element: <AdminRoute> <div>DashBoard Home</div> </AdminRoute>
      },
      {
        path: "add-new-book",
        element: <AdminRoute> <div>Add new Book</div> </AdminRoute>
      },
      {
        path: "edit-book/:id",
        element: <AdminRoute> <div>Edit Book</div> </AdminRoute>
      },
      {
        path: "manage-book",
        element: <AdminRoute> <div>Manage Book</div> </AdminRoute>
      },
    ]
  },
]);

export default router;
