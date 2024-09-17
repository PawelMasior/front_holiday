import React from 'react';
import Layout from '../components/layout/Layout';
import Link from "next/link"

const textColorGreen = "text-teal-600"
const textColorBlue = "text-sky-600"

const Login = () => {
    return (
        <>
            <Layout>
                <section className="relative pb-8">
                    <div className="hidden lg:block absolute inset-0 w-2/3 ml-auto">
                        <div className="flex items-center h-full wow animate__animated animate__fadeIn animated" data-wow-delay=".2s">
                            <img className="lg:max-w-lg mx-auto" src="/assets/imgs/illustrations/user_login.svg" alt="Login" />
                        </div>
                    </div>               
                    <div className="container">
                        <div className="relative flex flex-wrap pt-12">
                            <div className="lg:flex lg:flex-col w-full lg:w-1/2 py-6 lg:pr-20">
                                <div className="w-full max-w-lg mx-auto lg:mx-0 my-auto wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                                    <span className="text-basic text-slate-600">Login</span>
                                    <div className="flex mb-4 px-4 bg-slate-50 rounded border border-gray-200">
                                        <input className="w-full py-4 text-xs placeholder-slate-400 font-semibold leading-none bg-slate-50 outline-none" type="email" placeholder="Email" />
                                        <svg className="h-6 w-6 ml-4 my-auto text-slate-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                                        </svg>
                                    </div>
                                    <div className="flex mb-6 px-4 bg-slate-50 rounded border border-gray-200">
                                        <input className="w-full py-4 text-xs placeholder-slate-400 font-semibold leading-none bg-slate-50 outline-none" type="password" placeholder="Password" />
                                        <button className="ml-4">
                                            <svg className="h-6 w-6 my-auto text-slate-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="float-left mb-6 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                        <label className="inline-flex text-xs">
                                            <input type="checkbox" className="form-checkbox accent-slate-500" checked />
                                            <span className="ml-2">
                                                I agree to {" "}
                                                <Link href="/privacy">
                                                    <a className="underline hover:text-slate-500">Privacy policy</a>
                                                </Link>{" "}
                                                and {" "}
                                                <Link href="/statute">
                                                <a className="underline hover:text-slate-500">Terms of use</a>
                                                </Link>
                                            </span>
                                        </label>
                                    </div>
                                    <button className="transition duration-300 ease-in-out transform hover:-translate-y-1 block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-slate-600 hover:bg-slate-400 rounded">
                                        Login</button>
                                    <p className="my-6 text-xs text-slate-400 text-center font-semibold">or continue with</p>
                                    {/* <button className="transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center w-full px-4 py-3 mb-2 text-xs text-slate-500 font-semibold leading-none border border-gray-200 hover:bg-slate-50 rounded" href="#">
                                        <img className="h-6 pr-10" src="/assets/imgs/logos/facebook-sign.svg" />
                                        <span>Sign In with Facebook</span>
                                    </button> */}
                                    <button className="transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center px-4 py-3 w-full text-xs text-slate-500 font-semibold leading-none border border-gray-200 hover:bg-slate-50 rounded" href="#">
                                        <img className="h-6 pr-10" src="/assets/imgs/logos/google-sign.svg" />
                                        <span>Login with Google</span>
                                    </button>
                                </div>
                                <div className="w-full mt-12 mx-auto text-center">
                                    <p className="text-basic">
                                        Not registered?{" "}
                                        <Link href="/signup">
                                            <a className="inline-block text-lg text-slate-600 hover:text-slate-700 font-semibold leading-none wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                                Register
                                            </a>
                                        </Link>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Login;