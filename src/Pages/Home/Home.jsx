import Banner from "../../Components/HomePageBanner/Banner";
import PopularItem from "../../Components/PopularItemSlider/PopularItem";


const Home = () => {
    return (
        <div className="min-h-screen">
           <Banner></Banner>
           <PopularItem></PopularItem>

            
        </div>
    );
};

export default Home;