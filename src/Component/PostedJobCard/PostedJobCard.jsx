import Swal from "sweetalert2";


const PostedJobCard = ({ postcard }) => {
    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/jobs/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                    })
                
            }
        });
    }
    const { _id, JobTitle, category, Deadline, PriceRange, Description } = postcard;
    return (
        <div>
            <div className="flex flex-col text-center bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    Job Title: {JobTitle}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
                    Job_Category: {category}
                </p>
                <p className="mt-2 text-gray-800 dark:text-gray-400">
                    Job_Description:  {Description}
                </p>
                <div className=" text-center">
                    <p className="mt-2 text-gray-800 dark:text-gray-400">
                        Dead_Line:   {Deadline}
                    </p>
                    <p className="mt-2 text-gray-800 dark:text-gray-400">
                        Price_Range:   {PriceRange}
                    </p>
                </div>
                <div className="flex gap-5 justify-center">
                    <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-gray-100 border border-transparent font-semibold text-gray-500 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:text-white dark:focus:ring-offset-gray-800">
                        Update
                    </button>
                    <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-gray-100 border border-transparent font-semibold text-gray-500 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:text-white dark:focus:ring-offset-gray-800" onClick={() => handleDelete(_id)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostedJobCard;