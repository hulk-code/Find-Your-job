import { Outlet } from "react-router-dom";
import Navber from "../Component/Pages/SharedPage/Navber/Navber";

import Footer from "../Component/Pages/SharedPage/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Root;