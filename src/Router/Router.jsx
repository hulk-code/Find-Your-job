import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Component/Pages/ErrorPage/Error";
import Home from "../Component/Pages/Home/Home";
import Login from "../Component/LoginPage/Login";
import Register from "../Component/RegisterPage/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ],
    },
  ]);
  export default router;