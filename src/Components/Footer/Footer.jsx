import { IoIosArrowRoundForward } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="h-[30rem] footer flex flex-col justify-center pl-[15%]">
            <div className="relative w-[30vw]">
                <input className="w-[30vw] h-[3.8rem] rounded-2xl shadow-sm flex pl-10 placeholder:text-gray-400 outline-none border-none pr-4" type="search" name="search" id="" placeholder="Enter Your email" />

                <button className="bg-[#fc6011] absolute top-[0.4rem] right-2 text-white w-[8vw] h-[3rem] rounded-2xl flex justify-center items-center gap-1">Subscribe <IoIosArrowRoundForward className="text-2xl" /></button>

            </div>

            <h1 className="mt-20 text-4xl font-bold">pti.</h1>

            <div className="flex flex-col-reverse lg:flex-row items-center gap-[20%]">
                <p className="text-xl font-semibold">Copyright&#169;Tripp.All Right Reserved</p>
                <div className="flex gap-3">
                    <div className="w-[5rem] h-[5rem] rounded-[5rem] bg-gray-300 flex justify-center items-center text-4xl text-orange-800">
                        <FaGoogle/>
                    </div>
                    <div className="w-[5rem] h-[5rem] rounded-[5rem] bg-gray-300 flex justify-center items-center text-4xl text-orange-800">
                        <FaTwitter/>
                    </div>
                    <div className="w-[5rem] h-[5rem] rounded-[5rem] bg-gray-300 flex justify-center items-center text-4xl text-orange-800">
                        <FaInstagram/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;