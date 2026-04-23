import { NavLink } from "react-router";
import './Navbar.css'


const Navbar = () => {
    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar w-11/12 mx-auto">
                <div className="flex-1">
                    <a className="text-2xl"><span className="text-[#1F2937] font-extrabold">Keen</span><span className="text-[#244D3F] font-semibold">Keeper</span></a>
                </div>
                <div className="flex gap-2">
                    <NavLink to={'/'} className="btn">Home</NavLink>
                    <NavLink to={'/timeline'} className="btn">Timeline</NavLink>
                    <NavLink to={'/stats'} className="btn">Stats</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;