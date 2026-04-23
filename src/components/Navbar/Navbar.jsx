import { NavLink } from "react-router";
import './Navbar.css'
import { RiHome2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { GoGraph } from "react-icons/go";


const Navbar = () => {
    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar w-11/12 mx-auto">
                <div className="flex-1">
                    <a className="text-2xl"><span className="text-[#1F2937] font-extrabold">Keen</span><span className="text-[#244D3F] font-semibold">Keeper</span></a>
                </div>
                <div className="flex gap-2">
                    <NavLink to={'/'} className="btn"><RiHome2Line/> Home</NavLink>
                    <NavLink to={'/timeline'} className="btn"><IoTimeOutline/> Timeline</NavLink>
                    <NavLink to={'/stats'} className="btn"><GoGraph/> Stats</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;