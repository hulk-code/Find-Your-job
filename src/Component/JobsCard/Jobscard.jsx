import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Jobscard = ({card}) => {
    const{JobTitle,Deadline,PriceRange,Description,Bid,_id}=card;
    useEffect(() => {
        AOS.init({
            duration: 1000, 
          });
      }, []);
 

    return (
        <div className=''>
            <div className="card w-9/12 h-[350px] bg-black text-primary-content mt-10 mb-10" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
  <div className="card-body">
    <h2 className="card-title">Job Title: {JobTitle}</h2>
    <p>{Description}</p>
    <div >
        <p>Price Range: {PriceRange}</p>
        <p>Deadline: {Deadline}</p>
    </div>
    <div className="card-actions justify-end">
    <Link to={`/jobdetails/${_id}`}><button className="btn bg-white text-black hover:rounded-full">BID NOW</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Jobscard;