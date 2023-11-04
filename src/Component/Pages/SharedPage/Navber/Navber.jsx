
// Home,Add job,My posted jobs,My Bids,Bid Requests

import { NavLink } from "react-router-dom";

const Navber = () => {
    const navberRoutes=<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/addjob'>Add_Job</NavLink></li>
    <li><NavLink to='/mypostedjobs'>My_posted_jobs</NavLink></li>
    <li><NavLink to='/,mybids'>My_Bids</NavLink></li>
    <li><NavLink to='/bidrequests'>Bid_Requests</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-slate-400 font-bold">
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
  <div className="w-24 rounded-full">
    <img src="https://i.ibb.co/hc0BnsD/freelogo.jpg" />
  </div>
</div>
    <p className="ml-5 text-4xl">Free<span className="text-bold text-orange-300">Lancer</span></p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navberRoutes}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navber;