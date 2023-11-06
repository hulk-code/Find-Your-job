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
        element: <MyBid></MyBid>
      },
      {
        path: "/addjob",
        element: <Addjob></Addjob>
      },
      {
        path: "/mypostedjobs",
        element: <MyPostedJob></MyPostedJob>
      },
      {
        path: "/jobdetails/:id",
        element: <Jobdetails></Jobdetails>,
     
        loader:({params}) =>fetch(`http://localhost:5000/jobs/${params.id}`)
      },
    ],
    },
  ]);
  export default router;