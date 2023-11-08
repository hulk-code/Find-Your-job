import { useContext, useState } from "react";
import {  Link, Navigate, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Jobdetails = () => {
    const{user}=useContext(AuthContext)
const jobDetail=useLoaderData()
console.log(jobDetail)

const{Deadline,PriceRange,Email,JobTitle ,_id ,Description}=jobDetail;
const [hasPlacedBid, setHasPlacedBid] = useState(false);
    
const handleCheckedOut=e =>{
    e.preventDefault()
    const form=e.target;
    const useremail=user?.email
    const deadline=form.deadline.value
    
    const owneremail=form.owneremail.value
    
    const order={
        
        email:useremail,
        JobTitle,
        owneremail:owneremail,
        deadline,
        service_id:_id,
        status:"Pending",
        price:PriceRange,
       
    }
   console.log(order);

   fetch('https://your-job-server.vercel.app/bookings' ,{
    method:"POST",
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(order)
   }  )
   .then(res => res.json())
   .then(data => {
    console.log(data)
   })
   setHasPlacedBid(true);
    Swal.fire({
      title: "Bid Placed!",
      text: "Your bid has been placed successfully.",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '/mybids';
      //  <Navigate to='/mybids'></Navigate>
      }
    });

}

const handlebid=() =>{
   
}
return (
    <div className="mb-5">
      
        
<div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element-dark.svg')]">
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
    
    
    

    
    <div className="mt-5 max-w-xl text-center mx-auto">
      <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
    {JobTitle}
      </h1>
    </div>
    

    <div className="mt-5 max-w-3xl text-center mx-auto">
      <p className="text-lg text-gray-50">{Description}</p>
    </div>
<div className="flex justify-center text-white">
    <div >
        PriceRange:{PriceRange}
    </div>
    <div>
        DeadLine:{Deadline}
    </div>
</div>
   
    
   
  </div>
</div>







<div >
    <p className="text-5xl text-center text-bold lg:p-5">Place Your Bid</p>
    
<div className="w-9/12 mx-auto">
<form onSubmit={handleCheckedOut}>
       <div className="grid grid-cols-2 gap-5">

<div className="form-control">
<label className="label">
    <span className="label-text font-bold">User Email</span>
</label>
<input type="text"  defaultValue={user?.email} placeholder="useremail" readOnly className="input input-bordered" required />
</div>
<div className="form-control">
<label className="label">
    <span className="label-text font-bold">DeadLine</span>
</label>
<input type="date" placeholder="date" defaultValue={Deadline} name='deadline' className="input input-bordered" required />
</div>
<div className="form-control">
<label className="label">
    <span className="label-text">Owner Email</span>
</label>
<input type="email" placeholder="Owner email" name='owneremail' defaultValue={Email} readOnly className="input input-bordered" required />
</div>
<div className="form-control">
<label className="label">
    <span className="label-text">Price_Range</span>
</label>
<input type="text" placeholder="" defaultValue={PriceRange} name="price"  className="input input-bordered" required />
</div>


</div >
<div className="text-center font-bold">

<button onClick={handlebid}
            className={
              user?.email === Email || hasPlacedBid
                ? "mt-5 btn-disabled bg-slate-400 text-white p-3 rounded-xl "
                : "btn mt-5 bg-blue-400 text-white"
            }
           
          >
            {hasPlacedBid ? "Bid Placed" : "Bid Your Project"}
          </button>
</div>
       </form>
</div>
</div>
    </div>
);
};


export default Jobdetails;
