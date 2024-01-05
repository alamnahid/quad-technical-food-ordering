import { Outlet } from "react-router-dom";
import { NavbarDark } from "../Components/Header/Navbar";


const Root = () => {
    return (
        <div>
            <NavbarDark></NavbarDark>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;