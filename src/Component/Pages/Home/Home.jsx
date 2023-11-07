import Banner from "../../Banner/Banner";
import NeedtoHire from "../../ExtraSection/NeedtoHire";
import RequestJob from "../../ExtraSection/RequestJob";
import JobsCategory from "../../JobsCategory/JobsCategory";


const Home = () => {
    return (
        <div>
          <Banner></Banner> 
          <JobsCategory></JobsCategory>
          <RequestJob></RequestJob>
          <NeedtoHire></NeedtoHire>
        </div>
    );
};

export default Home;