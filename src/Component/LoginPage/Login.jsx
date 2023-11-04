import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { AuthContext } from "../AuthProvider/AuthProvider";





const Login = () => {
    


    return (
        <div>
        
         
            <div className="hero min-h-screen bg-[url('https://i.ibb.co/RphMz4v/loginbg.jpg')]" data-aos="fade-down">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-gre">Login Here!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-500">
      <form className="card-body" onSubmit={handlLogin} >
       
       
       
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium text-lg">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium text-lg">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

      </form>
      <p className=" m-auto font-medium p-3">New Here? PLZ<Link to='/register' className="text-red-700">Register</Link></p>
        
        
    </div>
      <p className='text-red-500'> {error}</p>
      
      
      
     
  </div>
</div>
        </div>
    );
};

export default Login;