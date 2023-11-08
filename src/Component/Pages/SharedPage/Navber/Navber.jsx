
// Home,Add job,My posted jobs,My Bids,Bid Requests

import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navber = () => {
    const {user , LogOut}=useContext(AuthContext)
    console.log(user);
    const [isScrolled, setIsScrolled] = useState(false);
    const hanadleLogOut=()=>{
        LogOut()
        .then(result =>{
          console.log(result);
        })
        .catch(error =>{
          console.error(error);
        })
      }
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClasses = `navbar bg-slate-400 font-bold ${
    isScrolled ? "navbar-minimized" : ""
  }`;
    const navberRoutes=<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/addjob'>Add_Job</NavLink></li>
    <li><NavLink to='/mypostedjobs'>My_posted_jobs</NavLink></li>
    <li><NavLink to='/mybids'>My_Bids</NavLink></li>
    <li><NavLink to='/bidrequests'>Bid_Requests</NavLink></li>
    </>
    return (
        <div>
           <div className={navClasses}>
           {/* <div className="navbar bg-slate-400 font-bold"> */}
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
        {navberRoutes}
      </ul>
    </div>
    <div className="avatar">
  <div className="w-8 md:w-24 rounded-full">
    <img src="https://i.ibb.co/hc0BnsD/freelogo.jpg" />
  </div>
</div>
    <p className="md:ml-5 md:text-4xl">Free<span className="text-bold text-orange-300">Lancer</span></p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navberRoutes}
    </ul>
  </div>
  <div className="navbar-end">
  
   {
      user?.displayName
     }
       {
        user && <div className="avatar">
        <div className="w-6 md:w-10 lg:mr-3 lg:ml-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img  src={user?.photoURL} alt="" />
        </div>
      </div>
       }
   {
      user ? <button className="btn btn-ghost" onClick={hanadleLogOut} >Log Out</button> 
      :
      <Link to='/login'>
  <button className="btn btn-ghost">Login</button>
  </Link>
    }
  </div>
</div>
           </div>
        
    );
};

export default Navber;