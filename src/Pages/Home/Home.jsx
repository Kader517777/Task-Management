import Banner from "./Banner";
import Benefit from "./Benefit";

const Home = () => {
    return (
        <div className="max-w-[1024px] mx-auto h-screen">
            <Banner />
            <Benefit />
        </div>
    );
};

export default Home;