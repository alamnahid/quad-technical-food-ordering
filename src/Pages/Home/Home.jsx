import Banner from "../../Components/HomePageBanner/Banner";
import PopularItem from "../../Components/PopularItemSlider/PopularItem";
import RecomentedItem from "../../Components/RecomentedItemSlider/RecomentedItem";


const Home = () => {
    return (
        <div className="min-h-screen">
           <Banner></Banner>
           <PopularItem></PopularItem>
           <RecomentedItem></RecomentedItem>

            
        </div>
    );
};

export default Home;