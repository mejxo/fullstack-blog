import { Link, Outlet } from "react-router-dom";

import logo from "../imgs/logo.png";
import search from "../icons/search.svg";
import menu from "../icons/menu.svg";

const Navbar = ({type}) => {

    const getCurrentDate = () => {
        const currentDate = new Date();
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const day = currentDate.getDate();
        const suffix = (day === 1 || day === 21 || day === 31) ? 'st' : (day === 2 || day === 22) ? 'nd' : (day === 3 || day === 23) ? 'rd' : 'th';
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        return formattedDate.replace(/\d{1,2}/, `$&${suffix}`);
    }

    const getScreenSize = () => {
        const isLG = window.matchMedia("(min-width: 1024px)").matches;
        return isLG;
    }

    return (
        <>
            {type == "time" ?
            <nav className="navbar bg-transparent bg-opacity-80 sm:p-10">
                <div className="w-fit flex items-center gap-3 font-bold ">
                    <Link to="/" className="flex-none w-10"><img src={ logo } className="w-full"/></Link>
                    <span className=" font-inter text-xl">{ getCurrentDate() }</span>
                </div>

                <div className="w-fit flex font-bold items-center gap-5 sm:gap-10">
                    <Link to="/stories" className="flex-none"><span className="font-inter text-xl hidden lg:block underline-animation">Stories</span></Link>
                    <Link to="/shift-weekly" className="flex-none"><span className="font-inter text-xl hidden lg:block underline-animation">Email</span></Link>
                    <Link to="/" className="flex-none"><img src={ search } className="w-5 sm:w-6"/></Link>
                    <Link to="/" className="flex-none"><img src={ menu } className="w-6 sm:w-7"/></Link>
                </div>
            </nav>

            : type == "classic" ?
            <nav className="navbar border-b-0 px-[4.5vw] bg-transparent bg-opacity-80 sm:p-10">
                <div className="w-fit flex items-center gap-3 font-bold ">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={ logo } className="w-10"/>
                        <span className="font-mono text-4xl mt-1">Shift</span>
                    </Link>
                </div>

                <div className="w-fit flex font-bold items-center gap-5 sm:gap-10">
                    <Link to="/stories" className="flex-none"><span className="font-inter text-xl hidden lg:block underline-animation">Stories</span></Link>
                    <Link to="/shift-weekly" className="flex-none"><span className="font-inter text-xl hidden lg:block underline-animation">Email</span></Link>
                    <Link to="/" className="flex-none"><img src={ menu } className="w-6 sm:w-7"/></Link>
                </div>

                <div className="w-[97%] h-[1.5px] bg-black absolute bottom-0 left-1/2 transform translate-x-[-50%]" >

                </div>
            </nav>

            : type == "monster" ?
            <nav className="navbar border-b-0 px-[4.5vw] lg:px-[6vw] lg:h-[130px] lg:py-9 bg-transparent bg-opacity-80 sm:p-10">
                <div className="w-fit flex items-center gap-3 font-bold ">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={ logo } className="w-10 lg:w-14"/>
                        <span className="font-mono text-4xl lg:text-[60px] mt-1">Shift</span>
                    </Link>
                </div>

                <div className="w-fit flex font-bold items-center gap-5 sm:gap-10">
                    <Link to="/stories" className="flex-none"><span className="font-inter text-xl hidden lg:block underline-animation">Stories</span></Link>
                    <Link to="/shift-weekly" className="flex-none"><span className="font-inter text-xl hidden lg:block underline-animation">Email</span></Link>
                    <Link to="/" className="flex-none"><img src={ menu } className="w-6 sm:w-7"/></Link>
                </div>

                <div className="w-[97%] h-[1.5px] lg:h-[0.5px] bg-black absolute bottom-0 left-1/2 transform translate-x-[-50%]" >

                </div>
            </nav>
            
            : " "
            
            }

            <Outlet/>
        </>
    )
}

export default Navbar;