import banner from "../../assets/banner.png"
import { TypeAnimation } from 'react-type-animation';
const Banner = () => {
    return (
        <div className="md:w-[90vw] lg:w-[80vw] mx-auto h-[25.4rem] md:bg-gradient-to-t from-[#f99f1c] to-[#f9a01cd0] rounded-[2rem] mt-12 lg:mt-32 flex flex-col md:flex-row justify-evenly items-center px-10">

            <div className="text-center md:text-left">
                {/* <h1 className="text-2xl lg:3xl 2xl:text-4xl text-black md:text-white font-semibold leading-10">Deliver Food To Your <br /> Door Step</h1> */}

                <h1 className="text-2xl lg:3xl 2xl:text-4xl text-black md:text-white font-semibold">Deliver Food To Your </h1>

                    <TypeAnimation
                    sequence={[
                        'Door Step.',
                        1000,
                        'With Ease.',
                        1000,
                        'Anytime.',
                        1000,
                        'Promptly.',
                        1000,
                    ]}
                    speed={50}
                    className='text-2xl lg:3xl 2xl:text-4xl text-black md:text-white font-semibold'
                    repeat={Infinity}
                />

                <p className="text-gray-700 md:text-gray-300 font-normal mt-4 md:text-lg">Authentic Food, Quick Service, Fast Delivery</p>
            </div>

            <div className="bg-[#fd9460] md:bg-transparent h-[12rem] md:h-auto rounded-3xl w-[95vw] md:w-auto mt-10 md:mt-0 relative">
                <img className="absolute md:relative -top-[4.8rem] md:top-0 w-[25.3rem] md:w-auto" src={banner} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;