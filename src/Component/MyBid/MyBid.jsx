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
           <div className="flex flex-col">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Age</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Address</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
           
{
        booked.map(book => <MyBidCard key={book._id} book={book}></MyBidCard>)
      }
            

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyBid;

  