import { Helmet } from "react-helmet";
import Banner from "../../Banner/Banner";
import NeedtoHire from "../../ExtraSection/NeedtoHire";
import OurCommunity from "../../ExtraSection/OurCommunity";
import RequestJob from "../../ExtraSection/RequestJob";
import JobsCategory from "../../JobsCategory/JobsCategory";


const Home = () => {
    return (
        <div>
          <Helmet>
                <title>Freelancer || Home</title>
            </Helmet>
          <Banner></Banner> 
          <JobsCategory></JobsCategory>
          <RequestJob></RequestJob>
          <NeedtoHire></NeedtoHire>
          <OurCommunity></OurCommunity>
        </div>
    );
};

export default Home;