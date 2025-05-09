import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {

    const navLinks = <>
        <NavLink className="mr-5" to="/">Home</NavLink>
        <NavLink className="mr-5" to="/listedBooks">Listed Books</NavLink>
        <NavLink to="/pagesToRead">Pages to Read</NavLink>
    </>

    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">BookStore</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-2 text-white">
                    <a className="btn bg-green-300">Sign in</a>
                    <a className="btn bg-purple-300">Sign up</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;