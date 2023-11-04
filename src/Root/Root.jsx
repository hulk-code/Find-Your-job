import { Outlet } from "react-router-dom";
import Navber from "../Component/Pages/SharedPage/Navber/Navber";


const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;