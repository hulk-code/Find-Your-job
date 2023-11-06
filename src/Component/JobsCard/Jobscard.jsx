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
        <div>
            <div className="card w-9/12 bg-primary text-primary-content mt-10 mb-10" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
  <div className="card-body">
    <h2 className="card-title">{JobTitle}</h2>
    <p>{Description}</p>
    <div className="flex">
        <p>{PriceRange}</p>
        <p>{Deadline}</p>
    </div>
    <div className="card-actions justify-end">
    <Link to={`/jobdetails/${_id}`}><button className="btn btn-primary">{Bid}</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Jobscard;