import { Outlet } from "react-router-dom";
import { NavbarDark } from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";


const Root = () => {
    return (
        <div className="bg-[#eeeff0]">
            <NavbarDark></NavbarDark>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;