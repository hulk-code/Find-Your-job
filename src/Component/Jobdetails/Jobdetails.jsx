import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";








const Jobdetails = () => {
    const{user}=useContext(AuthContext)
const jobDetails=useLoaderData()
const{Deadline,PriceRange,Email,JobTitle ,_id}=jobDetails
const isButtonDisabled = user?.email === Email;
    
const handleCheckedOut=e =>{
    e.preventDefault()
    const form=e.target;
    const useremail=user?.email
    const deadline=form.deadline.value
    const price=form.price.value
    const owneremail=form.owneremail.value
    
    const order={
        
        customeremail:useremail,
        Owneremail:owneremail,
        
        deadline,
        service_id:_id,
        price,
       
    }
   console.log(order);

   fetch('http://localhost:5000/bookings' ,{
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

}
return (
    <div>
        <h2>Book Services{JobTitle}</h2>
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
    <span className="label-text">Ownwe Email</span>
</label>
<input type="email" placeholder="phone" name='owneremail' defaultValue={Email} readOnly className="input input-bordered" required />
</div>
<div className="form-control">
<label className="label">
    <span className="label-text">Price_Range</span>
</label>
<input type="text" placeholder="" defaultValue={PriceRange} name="price"  className="input input-bordered" required />
</div>


</div >
<button
          className={`btn-primary btn-block mt-5 mb-5${isButtonDisabled ? ' disabled' : ''}`}
          type="submit"
          value="order confirm"
          disabled={isButtonDisabled}
        >
          Bid on the project
        </button>
       </form>
    </div>
);
};


export default Jobdetails;