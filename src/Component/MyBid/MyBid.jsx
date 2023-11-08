import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyBidCard from "../Mybidcard/MyBidCard";
import { Helmet } from "react-helmet";


const MyBid = () => {
  const { user } = useContext(AuthContext)
  console.log(user)
  const [booked, setBooked] = useState([])
  const [disable, setDisable] = useState(false)
  const [sort, setSort] = useState("");
  const url = `http://localhost:5000/bookings?email=${user?.email}`
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setBooked(data)
        console.log(data);
      })
  }, [url])
  const handleComplete = () => {
    setDisable(!disable)
  }

  
  console.log(sort);
  return (
    <div className="m-10">
      <Helmet>
        <title>Freelancer || MyBid</title>
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
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Confirmation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">

                  {
                    booked.map(book =>
                      // const{JobTitle,Deadline,price,email,owneremail ,status}=book
                      <tr key={book._id} className="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{book.JobTitle}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{book.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{book.deadline}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{book.status}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          <button onClick={handleComplete} className={book.status === "Cancelled" || book.status === "Pending" || disable ? "disable " : "btn btn-primary"}>Complete</button>
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

export default MyBid;

