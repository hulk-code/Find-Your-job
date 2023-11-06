import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Component/Pages/ErrorPage/Error";
import Home from "../Component/Pages/Home/Home";
import Login from "../Component/LoginPage/Login";
import Register from "../Component/RegisterPage/Register";
import Jobdetails from "../Component/Jobdetails/Jobdetails";
import MyBid from "../Component/MyBid/MyBid";
import Addjob from "../Component/Addjob/Addjob";
import MyPostedJob from "../Component/MyPostedJob/MyPostedJob";
import Update from "../Component/Update/Update";
import PrivetRoute from "../Component/PrivateRoute/PrivateRoute";

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
      {
        path: "/mybids",
        element:<PrivetRoute> <MyBid></MyBid></PrivetRoute>
      },
      {
        path: "/addjob",
        element: <PrivetRoute><Addjob></Addjob></PrivetRoute>
      },
      {
        path: "/mypostedjobs",
        element: <PrivetRoute><MyPostedJob></MyPostedJob></PrivetRoute>
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader:({params}) =>fetch(`http://localhost:5000/job/${params.id}`)
        
      },
      {
        path: "/jobdetails/:id",
        element:<PrivetRoute> <Jobdetails></Jobdetails></PrivetRoute>,
     
        loader:({params}) =>fetch(`http://localhost:5000/jobs/${params.id}`)
      },
    ],
    },
  ]);
  export default router;