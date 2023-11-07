
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Addjob = () => {
    const { user } = useContext(AuthContext)
    const [deadline, setDeadline] = useState("");
    const handleSubmite = e => {
        e.preventDefault()
        console.log(e)
        const form = e.target;
        console.log(form)
        const email = user?.email
        const JobTitle = form.jobtitle.value;
        const Deadline = form.deadline.value;
        const Description = form.description.value;
        const PriceRange = form.PriceRange.value;
        const category = form.category.value;
        const FormData = { email, JobTitle, Deadline, Description, PriceRange, category }

        console.log(FormData)
        fetch('http://localhost:5000/jobs', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(FormData)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: "Job Add!",
                    text: "Your job has been added successfully.",
                    icon: "success",
                  }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = '/mypostedjobs';
                   
                    }
                  });
                form.reset();

            })
           
    }
    const handleDeadlineChange = (e) => {
        setDeadline(e.target.value);
    };
    return (

        <div>
            <Helmet>
                <title>Freelancer || Add Job</title>
            </Helmet>
            <div className="hero min-h-screen mb-5" style={{ backgroundImage: 'url(https://i.ibb.co/h1bTNs3/freelance-websites.webp)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Post Your JOb Here</p>
                        <Link to='/mybids'> <button className="btn btn-primary">See Your Posted Job</button></Link>
                    </div>
                </div>
            </div>
            <div className="mb-12 font-bold">
                <h1 className="text-3xl font-serif font-semibold text-center my-5">Post Your job </h1>
                <div className="w-1/2 mx-auto " >
                    <form onSubmit={handleSubmite}>
                        <div className="lg:flex gap-10 ">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <label className="input-group">

                                    <input type="email" name="email" defaultValue={user?.email} readOnly placeholder="Enter Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Job_Title</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="jobtitle" placeholder="JOBTITLE" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="lg:flex gap-10 ">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Dead_Line</span>
                                </label>
                                <label className="input-group">

                                    <input
                                        type="date"
                                        name="deadline"
                                        placeholder=""
                                        className="input input-bordered w-full"
                                        value={deadline}
                                        onChange={handleDeadlineChange}
                                    />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="description" placeholder="DESCRIPTION" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="lg:flex gap-10 ">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">PriceRange</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="PriceRange" placeholder="MINPRICE" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <label >Select an category option:</label>
                                <select id="dropdown" name="category">
                                    <option value="web development">web development</option>
                                    <option value="digital marketing">digital marketing</option>
                                    <option value="graphics design">graphics design</option>
                                </select>
                            </div>
                        </div>


                        <div className="lg:flex gap-10 mb-4">


                        </div >
                        <div className="text-center">
                            <input type="submit" className="bg-slate-900 text-white p-4 rounded hover:bg-slate-500" value="Add Job" />
                            </div>
                    </form>

                </div>

            </div>
        </div>

    );
};

export default Addjob;