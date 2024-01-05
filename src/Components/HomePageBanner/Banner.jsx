import banner from "../../assets/banner.png"

const Banner = () => {
    return (
        <div className="w-[80vw] mx-auto h-[25rem] bg-gradient-to-t from-[#f99f1c] to-[#f9a01cd0] rounded-[2rem] mt-32 flex justify-evenly items-center">

            <div className="">
                <h1 className="text-4xl text-white font-semibold leading-10">Deliver Food To Your <br /> Door Step</h1>

                <p className="text-gray-300 font-normal mt-4 text-lg">Authentic Food, Quick Service, Fast Delivery</p>
            </div>

            <div>
                <img src={banner} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;