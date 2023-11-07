import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
          <div className="text-center ">
          <Link to='/'> <button className="btn btn-accent mt-4 mb-4 text-2xl font-bold" >GO TO HOME</button></Link>
          </div>
            <img className="w-full lg:h-[550px] " src="https://i.ibb.co/9cgyhMP/404.webp" alt="" />
        </div>
    );
};

export default Error;