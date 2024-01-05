import {
    Navbar,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { GoPerson } from "react-icons/go";


export function NavbarDark() {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <Navbar
            variant="gradient"
            className="mx-auto min-w-[80vw] px-4 py-3 shadow-none bg-[#eeeff0] border-none pt-8" 
        >
            <div className="flex flex-wrap items-center justify-between gap-y-4 text-black">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 ml-2 cursor-pointer font-extrabold py-1.5"
                >
                    pti.
                </Typography>

              <div className="flex items-center gap-4">

                  {/* search input  */}

                  <div className="relative">
                    <input className="w-[30vw] h-10 rounded-lg shadow-sm flex pl-10 placeholder:text-gray-400 outline-none border-none pr-4" type="search" name="search" id="" placeholder="Search Audiobook" />
                    <IoSearchOutline className="absolute top-2 text-xl text-orange-800 left-2" />
                </div>

                {/* menu  */}

                <Menu open={openMenu} handler={setOpenMenu} allowHover>
                    <MenuHandler>
                        <Button
                            variant="text"
                            className="flex items-center text-base font-semibold gap-10 bg-white capitalize tracking-normal h-10"
                        >
                            MENU{" "}
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`h-3.5 w-3.5 text-orange-800 transition-transform ${openMenu ? "rotate-180" : ""
                                    }`}
                            />
                        </Button>
                    </MenuHandler>
                    <MenuList className="rounded-lg">
                        <MenuItem className="hover:text-orange-800 text-gray-700">Home</MenuItem>
                        <MenuItem className="hover:text-orange-800 text-gray-700">Details</MenuItem>
                        <MenuItem className="hover:text-orange-800 text-gray-700">Category</MenuItem>
                        <MenuItem className="hover:text-orange-800 text-gray-700">My Favourite</MenuItem>
                        <MenuItem className="hover:text-orange-800 text-gray-700">Profile</MenuItem>
                        <MenuItem className="hover:text-orange-800 text-gray-700">Log In/Sign Up</MenuItem>
                    </MenuList>

                </Menu>


              </div>
                
                {/* avatar  */}
                
                <div className="w-8 h-8 bg-orange-700 rounded-[2rem] text-white text-xl flex justify-center items-center cursor-pointer">
                <GoPerson/>
                </div>
            </div>
        </Navbar>
    );
}