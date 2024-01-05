import { IoIosArrowRoundForward } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="h-[30rem] footer flex flex-col justify-center pl-[5%] lg:pl-[15%] mt-32">
            <div className="relative w-[90vw] lg:w-[40vw] 2xl:w-[30vw]">
                <input className="w-[90vw] lg:w-[40vw] 2xl:w-[30vw] h-[3.8rem] rounded-2xl shadow-sm flex pl-10 placeholder:text-gray-400 outline-none border-none pr-4" type="search" name="search" id="" placeholder="Enter Your email" />

                <button className="lg:bg-[#fc6011] absolute top-[0.4rem] right-2 text-[#fc6011] lg:text-white w-[30vw] lg:w-[12vw] 2xl:w-[8vw] h-[3rem] rounded-2xl flex justify-center items-center gap-1">Subscribe <IoIosArrowRoundForward className="text-2xl" /></button>

            </div>



            <div className="flex mt-20  flex-col-reverse lg:flex-row items-center gap-[20%]">
                <div className="mt-8 lg:mt-0">
                    <h1 className="text-4xl text-center lg:text-left font-bold">pti.</h1>
                    <p className="text-lg font-semibold mt-5">Copyright&#169;Tripp.All Right Reserved</p>
                </div>
                <div className="flex gap-3">
                    <div className="w-[3rem] h-[3rem] rounded-[3rem] bg-orange-900 lg:bg-gray-300 flex justify-center items-center text-2xl text-white lg:text-orange-800">
                        <FaGoogle />
                    </div>
                    <div className="w-[3rem] h-[3rem] rounded-[3rem] bg-orange-900 lg:bg-gray-300 flex justify-center items-center text-2xl text-white lg:text-orange-800">
                        <FaTwitter />
                    </div>
                    <div className="w-[3rem] h-[3rem] rounded-[3rem] bg-orange-900 lg:bg-gray-300 flex justify-center items-center text-2xl text-white lg:text-orange-800">
                        <FaInstagram />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;