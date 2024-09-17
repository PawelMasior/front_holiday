import React, { useState } from "react";
import Link from "next/link";

const divHeader = "navbar-backdrop fixed inset-0 bg-slate-800 opacity-25"
const navHeader = "fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto transition duration-300"
const aLogo = "mr-auto text-3xl font-semibold leading-none"
const btnCloseSVG = "h-6 w-6 text-slate-400 cursor-pointer hover:text-slate-300"
const itemsFlex = "flex items-center mb-8"
const ulText = "mobile-menu"
const ulExpand = "block p-4 text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-700 rounded-xl"
const sublinkText = "menu-sub-item text-sm text-slate-600 hover:text-slate-500"
const btnLogin = "block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-t_grey hover:bg-t_greydark text-white rounded"
const btnRegister = "block px-4 py-3 mb-2 text-xs text-center text-t_greydark hover:text-t_grey font-semibold leading-none border border-t_greydark hover:border-t_grey rounded"
const btnContact = "btn-contact w-full flex justify-center hover-up-2 text-base"
const btnPrimary = "btn-primary hover-up-2 text-lg"

const MobileMenu = ({ hiddenClass, handleRemove }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className={`${hiddenClass} navbar-menu relative z-50 transition duration-300`}>
                <div className={divHeader}></div>
                <nav className={navHeader}>
                    <div className={itemsFlex}>
                        <Link href="#"><a className={aLogo}><img className="pr-4" src="/assets/imgs/logos/logo_dark.svg" alt="site logo" width={280} height={10}/></a></Link>
                        <button className="navbar-close" onClick={handleRemove}>
                            <svg className={btnCloseSVG} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul className={ulText}>      
                            <li className={isActive.key == 2 ? "mb-1 menu-item-has-children rounded-xl active" : "mb-1 menu-item-has-children rounded-xl"} onClick={() => handleToggle(2)}>
                                <span className="menu-expand">+</span>
                                <Link href="#"><a className={ulExpand}>Products</a></Link>
                                <ul className={isActive.key == 2 ? "dropdown pl-5" : "hidden"}>
                                    {/* <li><Link href="/product"><a className={sublinkText}>Overview</a></Link></li> */}
                                    <li><Link href="/alpha-improver"><a className={sublinkText}>Alpha Improver</a></Link></li>
                                    <li><Link href="/product-confidence-ai"><a className={sublinkText}>Confidence-AI</a></Link></li>
                                    <li><Link href="/product-crypto-data-api"><a className={sublinkText}>Crypto Data API</a></Link></li>
                                </ul>
                            </li>      
                            <li className={isActive.key == 4 ? "mb-1 menu-item-has-children rounded-xl active" : "mb-1 menu-item-has-children rounded-xl"} onClick={() => handleToggle(4)}>
                                <span className="menu-expand">+</span>
                                <Link href="#"><a className={ulExpand}>Services</a></Link>
                                <ul className={isActive.key == 4 ? "dropdown pl-5" : "hidden"}>
                                    <li><Link href="/service-analytics-ai"><a className={sublinkText}>Customized Solutions</a></Link></li>
                                    <li><Link href="/contact"><a className={sublinkText}>Build with us</a></Link></li>
                                </ul>
                            </li>          
                            <li className={isActive.key == 3 ? "mb-1 menu-item-has-children rounded-xl active" : "mb-1 menu-item-has-children rounded-xl"} onClick={() => handleToggle(3)}>
                                <span className="menu-expand">+</span>
                                <Link href="#"><a className={ulExpand}>Research</a></Link>
                                <ul className={isActive.key == 3 ? "dropdown pl-5" : "hidden"}>
                                <li><Link href="/articles"><a className={sublinkText}>Articles</a></Link></li>
                                <li><Link href="/monitor-crypto"><a className={sublinkText}>Crypto Monitor</a></Link></li>
                                </ul>
                            </li>                                                                                                               
                            <li className={isActive.key == 5 ? "mb-1 menu-item-has-children rounded-xl active" : "mb-1 menu-item-has-children rounded-xl"} onClick={() => handleToggle(5)}>
                                <span className="menu-expand">+</span>
                                <Link href="#"><a className={ulExpand}>About</a></Link>
                                <ul className={isActive.key == 5 ? "dropdown pl-5" : "hidden"}>
                                <li><Link href="/about-team"><a className={sublinkText}>Team</a></Link></li>
                                    <li><Link href="/about-team#values"><a className={sublinkText}>Our Values</a></Link></li>
                                    <li><Link href="/contact"><a className={sublinkText}>Contact us</a></Link></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="mt-20 space-y-2 pt-6 border-t border-slate-100">
                            <a href="/contact">
                                <div className={"flex mb-2 p-1 border-stone-600 border-2 rounded-lg w-full  justify-center text-base"}>
                                    Contact us
                                </div>
                            </a>
                            {/* <a href="https://profile.lotangroup.com/">
                            <div className={"flex mb-2 p-1 bg-stone-600 border-2 rounded-lg w-full  justify-center text-base text-white"}>
                                    Login
                                </div>
                            </a> */}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default MobileMenu;
