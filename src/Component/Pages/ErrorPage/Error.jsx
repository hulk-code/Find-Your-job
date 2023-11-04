import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
          <div className="text-center p-10 ">
          <Link to='/'> <button className="btn btn-accent mt-4 mb-4 text-2xl font-bold" >GO TO HOME</button></Link>
          </div>
            <img className="w-full lg:h-[1250px]" src="https://i.ibb.co/b7mcLwL/Error.png" alt="" />
        </div>
    );
};

export default Error;