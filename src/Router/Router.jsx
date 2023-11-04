import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Component/Pages/ErrorPage/Error";
import Home from "../Component/Pages/Home/Home";

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
    ],
    },
  ]);
  export default router;