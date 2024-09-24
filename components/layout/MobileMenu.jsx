import React, { useState } from "react";
import Link from "next/link";

const divHeader = "navbar-backdrop fixed inset-0 bg-stone-800 opacity-25";
const navHeader = "fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto transition duration-300";
const ulText = "mobile-menu";
const ulExpand = "block p-4 text-base text-stone-900 hover:bg-stone-50 hover:text-stone-700 font-bold rounded-xl";
const sublinkText = "menu-sub-item text-sm text-stone-900 hover:text-stone-800";

const MobileMenu = ({ hiddenClass, handleRemove }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({ status: false });
        } else {
            setIsActive({ status: true, key });
        }
    };

    return (
        <div className={`${hiddenClass} navbar-menu relative z-50 transition duration-300`}>
            <div className={divHeader}></div>
            <nav className={navHeader}>
                <button onClick={handleRemove} className="absolute top-4 right-4 text-stone-900">
                    ✖️
                </button>
                <a href="/">
                    <a className="leading-none wow animate__animated animate__fadeIn animated hover-up-2 duration-500">
                        <p className="py-4 lg:text-2xl text-lg font-semibold text-stone-900">
                            🧭 Dalongo
                        </p>
                    </a>
                </a>
                <div>
                    <ul className={ulText}>
                        <li className={`mb-1 menu-item-has-children rounded-xl ${isActive.key === 2 ? "active" : ""}`} onClick={() => handleToggle(2)}>
                            <span className="menu-expand">+</span>
                            <Link href="#">
                                <a className={ulExpand}>🗿 Placeholder_1</a>
                            </Link>
                            <ul className={isActive.key === 2 ? "dropdown pl-5" : "hidden"}>
                                <li><Link href="/contact"><a className={sublinkText}>placeholder_1</a></Link></li>
                                <li><Link href="/contact"><a className={sublinkText}>placeholder_1</a></Link></li>
                                <li><Link href="/contact"><a className={sublinkText}>placeholder_1</a></Link></li>
                            </ul>
                        </li>
                        <li className={`mb-1 menu-item-has-children rounded-xl ${isActive.key === 2 ? "active" : ""}`} onClick={() => handleToggle(2)}>
                            <span className="menu-expand">+</span>
                            <Link href="#">
                                <a className={ulExpand}>🗿 Placeholder_2</a>
                            </Link>
                            <ul className={isActive.key === 2 ? "dropdown pl-5" : "hidden"}>
                                <li><Link href="/contact"><a className={sublinkText}>placeholder_2</a></Link></li>
                                <li><Link href="/contact"><a className={sublinkText}>placeholder_2</a></Link></li>
                                <li><Link href="/contact"><a className={sublinkText}>placeholder_2</a></Link></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="mt-20 space-y-2 pt-6 border-t border-stone-100">
                        <a href="/contact">
                            <div className="flex mb-2 p-1 border-stone-600 border-2 rounded-lg w-full justify-center text-base">
                                Contact us
                            </div>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default MobileMenu;
