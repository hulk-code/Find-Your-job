import { Link } from "react-router-dom";






const Register = () => {
 
  return (
    <div>
     
      <div className="hero min-h-screen bg-base-200 bg-[url('https://i.ibb.co/2KLRVCT/regibg.png')]" data-aos="fade-up">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Here!</h1>

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm  ">
            <form className="card-body">
                {/*  onSubmit={handleRegister} */}
              <div className="flex gap-5 font-bold">
              <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="displayName" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="url" name="photoURL" placeholder="Photo URL" className="input input-bordered" />
              </div>
              </div>

              <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  <p className='text-red-500'> </p>
                  {/* {error} */}
                </label>
              </div>
              </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className=" m-auto font-medium p-3 text-lg text-orange-400">have an account?<Link to='/login' className="text-green-500">Login</Link></p>
            
            <p className='text-green-500 mx-auto'></p>
            {/* {success} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;