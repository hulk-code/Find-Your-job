import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

const BidRequest = () => {
    const { user } = useContext(AuthContext)
    const email = user.email;
    // console.log(user)
    const [control, setControl] = useState(false)
    const[booked ,setBooked]=useState([])
    const url = `http://localhost:5000/bookings`
    useEffect(() => {
        fetch(url )
            .then(res => res.json())
            .then(data => {
              setBooked(data)
              console.log(data);
            })
    }, [control])

    const handleRejected = (user) => {
        fetch(`http://localhost:5000/bidRequest/rejected/${user._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              setControl(!control)
              Swal.fire({
                position: "top-end",
                icon: "success",
                title:'status is update now',
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      };
    const handleProgress = (user) => {
        fetch(`http://localhost:5000/bidRequest/progress/${user._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
            setControl(!control)
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: 'status is update now',
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      };


    return (
        <div className="m-10">
          <Helmet>
            <title>Freelancer || Bid Request</title>
        </Helmet>
           <div className="flex flex-col">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Job Title</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deadline</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Accept</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reject</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
           
{
        booked.filter(book => email === book.owneremail).map(book =>
          // const{JobTitle,Deadline,price,email,owneremail ,status}=book
          <tr key={book._id} className="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{book.JobTitle}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{book.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{book.deadline}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{book.price}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{book.status}</td>
              
              <td >
               <button  onClick={()=>{handleProgress(book)}} className={book.status === "In Progress"|| book.status === "Cancelled" ?  "disable text-slate-700" : "btn btn-primary"}>Accept</button>
              </td>
              <td >
               <button  onClick={()=>{handleRejected(book)}} className={book.status === "In Progress" || book.status === "Cancelled" ? "disable  text-slate-700 " : "btn btn-primary"}>Reject</button>
              </td>
            </tr>
          
         )

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

export default BidRequest;