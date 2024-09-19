import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header = ({ handleHidden }) => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };

        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [scroll]);

    return (
        <header className={`bg-transparent sticky-bar mt-4 ${scroll ? "stick" : ""}`}>
            <div className="container bg-transparent">
                <nav className="bg-transparent flex justify-between items-center py-3">
                    <Link href="/">
                        <a className="pr-4 lg:pr-0 text-3xl font-semibold leading-none wow animate__animated animate__fadeIn animated hover-up-2 duration-500">
                            <p className="text-stone-900">
                            🧭 My Holiday Planner
                            </p>
                        </a>
                    </Link>
                    <ul className="px-10 hidden lg:flex lg:items-center lg:w-auto lg:space-x-16 list-none">
                        <li className="pt-4 pb-4 group relative has-child">
                            <Link href="#">
                                <a className="text-lg font-semibold text-slate-800 hover:text-blueGray-500 duration-500">About Us</a>
                            </Link>
                            <ul className="drop-down-menu min-w-200">
                                <li>
                                    <Link href="/contact">
                                        <a className="menu-sub-item text-sm text-slate-700 hover:text-blueGray-500">Contact Us</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="pt-4 pb-4">
                            <Link href="/contact">
                                <a className="btn-contact bg-blue-500 text-white hover-up-2 text-base duration-500 border border-slate-500 px-4 py-2 rounded">🔐 Login</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="lg:hidden">
                        <button className="navbar-burger flex items-center py-2 px-3 text-t_greydark hover:text-slate-600 rounded border border-slate-700 hover:border-t_grey" onClick={handleHidden}>
                            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Mobile Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
