import { NavLink } from "react-router";
import './Navbar.css'
import { RiHome2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { GoGraph } from "react-icons/go";


const Navbar = () => {
    const links = <>

        <NavLink to={'/'} className="btn"><RiHome2Line /> Home</NavLink>
        <NavLink to={'/timeline'} className="btn"><IoTimeOutline /> Timeline</NavLink>
        <NavLink to={'/stats'} className="btn"><GoGraph /> Stats</NavLink>

    </>
    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar justify-between w-11/12 mx-auto">
                <div className="navbar-start">
                    <a className="text-2xl"><span className="text-[#1F2937] font-extrabold">Keen</span><span className="text-[#244D3F] font-semibold">Keeper</span></a>
                </div>
                <div className="navbar-center hidden sm:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        {links}
                    </ul>
                </div>
                <div className="dropdown dropdown-end absolute right-0">
                    <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow gap-1"
                    >
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;