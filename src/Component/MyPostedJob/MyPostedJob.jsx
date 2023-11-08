import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import PostedJobCard from "../PostedJobCard/PostedJobCard";
import { Helmet } from "react-helmet";



const MyPostedJob = () => {
    const { user } = useContext(AuthContext)
    const [posts, setposts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/job?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setposts(data)
            })
    }, [])
    return (
        <>
        <Helmet>
            <title>Freelancer || My Posted job</title>
        </Helmet>
        <div className="mt-10 mb-10">
            {
                posts.map(postcard => <PostedJobCard key={postcard._id} postcard={postcard}></PostedJobCard>)
            }
        </div>
        </>
        
    );
};

export default MyPostedJob;