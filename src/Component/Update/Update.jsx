import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Update = () => {
    const{user}=useContext(AuthContext)
    const updateData = useLoaderData()
    const [control, setControl] = useState(false)
    console.log(updateData)
    const { _id, JobTitle, category, Deadline, PriceRange, Description } = updateData;
    const handleupdate=e=>{
        e.preventDefault()
        console.log(e)
        const form = e.target;
        console.log(form)
        const email = user?.email
        const JobTitle = form.JobTitle.value;
        const Deadline = form.Deadline.value;
        const Description = form.Description.value;
        const PriceRange=form.PriceRange.value;
        const category = form.category.value;
        const FormData = { email, JobTitle,Deadline,Description, PriceRange, category }
        console.log(FormData)
        fetch(`https://your-job-server.vercel.app/jobs/${_id}` ,{
              method:"PUT",
              headers:{
                  'content-type':"application/json"
              },
              body:JSON.stringify(FormData)
          })
        
          .then(res =>res.json())
          .then(data =>{
              console.log(data)
              if(data.modifiedCount >0){
                Swal.fire({
                    icon:'success',
                    title:'Card update successful'
                });
                setControl(!control)
                
              }
          })
    }
    return (
       <div>
        <form onSubmit={handleupdate}>
        <div className="w-1/2 mx-auto">
            <div >
                <div className="flex rounded-md shadow-sm mb-5">
                    <span className="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400">Job_Title</span>
                    <input type="text" name='JobTitle' defaultValue={JobTitle} className="py-3 px-4 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"></input>
                </div>
            </div>

            <div>
                <div className="flex rounded-md shadow-sm mb-5">
                    <span className="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400">Category</span>
                    <select id="dropdown" name="category" defaultValue={category} >
                        <option value="web development">web development</option>
                        <option value="digital marketing">digital marketing</option>
                        <option value="graphics design">graphics design</option>
                    </select>
                </div>
            </div>

            <div>
                <div className="flex rounded-md shadow-sm mb-5">
                    <span className="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400">Description</span>
                    <input type="text" name='Description' defaultValue={Description} className="py-3 px-4 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"></input>
                </div>
            </div>
            <div className="mb-5">
                <label className="block text-sm font-medium mb-2 dark:text-white">PriceRange</label>
                <div className="relative">
                    <input type="text" name='PriceRange' defaultValue={PriceRange} id="hs-input-with-leading-and-trailing-icon" className="py-3 px-4 pl-9 pr-16 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="0.00"></input>
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                        <span className="text-gray-500">$</span>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4">
                        <span className="text-gray-500">USD</span>
                    </div>
                </div>
            </div>
            <div className="flex rounded-md shadow-sm mb-5">
                <span className="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400">DeadLine</span>
                <input type="text" name='Deadline' defaultValue={Deadline} className="py-3 px-4 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"></input>
            </div>
            <div className="mb-5">
                <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                    Update
                </button>
            </div>
        </div>

        </form>
       </div>
    );
};

export default Update;