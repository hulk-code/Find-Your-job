import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Jobscard = ({ card }) => {
  const { JobTitle, Deadline, PriceRange, Description, Bid, _id } = card;
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className=''
      whileHover={{ scale: 1.2 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
        >
      <div
        className="card w-9/12 h-[350px] bg-black text-primary-content mt-10 mb-10"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="card-body">
          <motion.h2 className="card-title" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            Job Title: {JobTitle}
          </motion.h2>
          <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            {Description}
          </motion.p>
          <div>
            <p>Price Range: {PriceRange}</p>
            <p>Deadline: {Deadline}</p>
          </div>
          <div className="card-actions justify-end">
          <motion.button
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 1.4 }}
  >
            <Link to={`/jobdetails/${_id}`}>
              <button className="btn bg-white text-black hover:rounded-full">BID NOW</button>
            </Link>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Jobscard;
