import { useContext, useEffect, useState } from "react";
import  { AuthContext } from "../AuthProvider/AuthProvider";
import MyBidCard from "../Mybidcard/MyBidCard";


const MyBid = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const[booked ,setBooked]=useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url )
            .then(res => res.json())
            .then(data => {
              setBooked(data)
            })
    }, [url])
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job_Title</th>
        <th>Email</th>
        <th>Dead_Line</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      
      {
        booked.map(book => <MyBidCard key={book._id} book={book}></MyBidCard>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyBid;