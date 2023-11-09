import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <img className="w-screen h-screen" src="https://i.ibb.co/ZxbPkRq/loading-icon-on-black-vector-24544990.jpg" alt="" />

    }
    if (user?.email) {

        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivetRoute;