

const OurCommunity = () => {
    return (
       <div className="md:flex items-center gap-5 mt-10 mb-10">
         <div className="w-1/2">
            <div >
                <h1 className="text-5xl font-bold mb-1 text-center">
                    Revolutionizing the Job Search Experience
                </h1>
                <p className="mx-4 text-center md:px-14 py-2">
                    Our job finding website is a powerful platform designed to connect job seekers with their ideal employment opportunities.With a user-friendly interface and advanced search capabilities, our site simplifies the job search process, making it easier for candidates to find the right job.
                </p>
            </div>
            <div className=" grid grid-cols-2">
                <div className="font-bold text-3xl" >148 <sup className="text-red-600">+</sup>
                   <p className=" font-normal text-xl"> Companies</p></div>
                <div className="font-bold text-3xl">218 <sup className="text-red-500">+</sup>  
                   <p  className="font-normal text-xl"> Applications</p></div>
                <div className="font-bold text-3xl">150 <sup className="text-red-500">+</sup>
                    <p  className="font-normal text-xl">Job Posted</p></div>
                <div className="font-bold text-3xl">640 <sup className="text-red-500">+</sup>
                   <p  className="font-normal text-xl" > Member</p></div>
            </div>
        </div>
        <div className="lg:w-1/2 relative" >
            <img className=" shadow-2xl" src="https://i.ibb.co/nrNST5s/extra1.jpg " alt="" />
            <img  className="w-1/2 absolute -left-20 top-28 rounded-lg border-8 border-white shadow-2xl  " src="https://i.ibb.co/J5RjQjk/extra2.jpg" alt="" />
        </div>
       </div>
    );
};

export default OurCommunity;
