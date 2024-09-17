import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import {SocialIcon} from "react-social-icons";
import Link from "next/link"
import Contact from "../components/Contact"


  const data = [
    {
        "link": "https://storage.googleapis.com/lotangroup-static-content/web/team_pawel_masior_white.png",
      "name": "Pawel Masior",
      "title": 'CEO & CTO',
      "desc": 'Product owner of IT solutions and AI. Investment banking expert in algo-trading and risk domains.',
    },
    {
        "link": "https://storage.googleapis.com/lotangroup-static-content/web/team_stefan_michalik_white.png",
      "name": "Stefan Michalik",
      "title": 'COO',
      "desc": 'Business developer: driving operations, strategic initiatives, and financial planning.',
    },
    {
        "link": "https://storage.googleapis.com/lotangroup-static-content/web/team_radek_bulat_white.png",
        "name": "Radosław Bułat",
        "title": 'Blockchain & Web3 Developer',
        "desc": 'Blockchain developer and entrepreneur, covering software development, blockchain and web3 automation.',
    },
    {
        "link": "https://storage.googleapis.com/lotangroup-static-content/web/team_pawel_maciazek_white.png",
        "name": "Pawel Maciążek",
        "title": 'Business Developer',
        "desc": 'Entrepreneur and manager specialized in building business development and sales.',
    },
    {
        "link": "https://storage.googleapis.com/lotangroup-static-content/web/team_mykola_shorobura_white.jpeg",
        "name": "Mykola Shorobura",
        "title": 'Full Stack Developer',
        "desc": 'Software Engineer and IT trainer with experience in software, frontend, backend, and cloud optimization.',
    },
    {
        "link": "https://storage.googleapis.com/lotangroup-static-content/web/team_andrea_didio_white.png",
        "name": "Andrea Di Dio",
        "title": 'Cloud Architect & Business Integration',
        "desc": 'Cloud architecture and technical solutions with a focus on sales and business development for corporate clients.',
    },
]
const dataValues = [
    {
        "title": "Passion & Inclusion",
        "text": "Driven by passion to unlock innovation and build up he team",
        "svg": "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    },
    {
        "title": "Research & Impact",
        "text": "Researching to understand markets and create meaningful impacts",
        "svg": "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    },
    {
        "title": "Meaning & Innovation",
        "text": "Focusing on the meaning behind the data and directly addressing challenges",
        "svg": "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    },
    {
        "title": "Sustainability",
        "text": "Approaching solutions with with top-tier technology and diligence",
        "svg": "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    },
]


const Index = () => {
    return (
        <>
        <Layout>
            <section className={"hidden lg:block h-[200px] lg:h-[300px] pt-8 pb-2 -mt-8 lg:-mt-36 bg-top bg-cover bg-no-repeat relative "} id="top-view" >
                    <video id="myVideo" className="w-full h-full object-cover" autoPlay playsInline muted loop>
                        <source src="https://storage.googleapis.com/lotangroup-static-content/web/video_front.mp4" type="video/mp4"/>
                    </video>
                    <div className="absolute w-full h-full top-0 left-0 bg-white/95">
                        <div className="mx-auto flex justify-center">
                                <h1 className="pt-44  text-3xl lg:text-4xl text-center text-cyan-900 font-medium flex justify-center lg:leading-normal  wow animate__animated animate__fadeIn ">
                                    Empowering you with quantitative insights
                                </h1>
                        </div>
                    </div>
            </section>
            <section className="bg-gradient-to-r from-white via-teal-400 to-white" id="team" >
                <div className="py-16 bg-white/90">
                    <div className="container mx-auto">
                            <p className="font-bold lg:px-20 pb-2 text-base lg:text-xl text-justify text-teal-900 flex justify-center lg:leading-normal  wow animate__animated animate__fadeIn">
                            We want to provide you with data-driven insights so you can make informed decisions
                            </p>
                            <p className="lg:px-20 pb-4 text-base lg:text-lg text-justify text-teal-900 flex justify-center lg:leading-normal  wow animate__animated animate__fadeIn">
                            We focus on uncovering the real meaning behind the data. 
                            We believe every analysis, graph, or single number has a story to tell.
                            Hence, we commit to discovering new insights and automating them within our delivered products.
                            </p>
                        <div className={"flex flex-wrap"}>
                            {data.map((item, index) => (
                                <div className={"w-full md:w-1/2 p-2"}>
                                    <div className={"p-2 bg-white shadow-sm rounded-lg hover-up-2 duration-500 wow animate__animated animate__fadeIn animated"} data-wow-delay=".1s">
                                        <div className={"flex"}>
                                            <img className={"h-full lg:w-32 w-20 rounded-lg "} src={item.link} alt="" />
                                            <div className={"lg:pt-2 pl-4"}>
                                                <h2 className="pt-2 text-teal-800 font-semibold lg:text-xl text-lg">
                                                {item.name}
                                                </h2>
                                                <p className="text-teal-700 font-semibold lg:text-base text-sm">
                                                {item.title}
                                                </p>
                                                <div className="hidden lg:block">
                                                    <p className={"pt-2 text-teal-900 font-medium text-sm text-justify"}>
                                                    {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="block lg:hidden">
                                            <p className={"pt-2 text-teal-900 font-medium text-sm text-justify"}>
                                            {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 overflow-x-hidden " id="values" style={{ backgroundImage: "url('https://storage.googleapis.com/lotangroup-static-content/web/fog_trees_4.jpg')" }}>
                <div className="container mx-auto">
                    <h1 className="py-4 text-3xl lg:text-4xl text-center font-bold text-cyan-900 text-center lg:leading-normal  wow animate__animated animate__fadeIn ">
                    Our values
                    </h1>
                    <h1 className="pb-4 text-base lg:text-xl text-center text-cyan-900 font-bold flex justify-center lg:leading-normal  wow animate__animated animate__fadeIn ">
                    Our values lead us the direction at all what we do
                    </h1>
                    <div className={"flex flex-wrap"}>
                    {dataValues.map((item, index) => (
                        <div className={"w-full lg:w-1/4 p-2"}>
                            <div className={"bg-white/80 lg:min-h-[200px] md:min-h-[200px] shadow-sm rounded-lg hover-up-2 duration-500 wow animate__animated animate__fadeIn animated"} data-wow-delay=".1s">
                                        <div className={"pt-4 text-cyan-700"}>
                                            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentcolor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                d={item.svg}></path>
                                            </svg>                                         
                                        </div>
                                        <p className="pt-2 text-cyan-900 text-base lg:text-base font-semibold text-center">
                                        {item.title}
                                        </p>
                                        <p className={"py-2 px-5 text-cyan-900 text-sm lg:text-base font-medium text-justify leading-loose"}>
                                        {item.text}
                                        </p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
            <section className="pt-10 pb-10" id="contact">
                <div className="pt-2 flex justify-center">
                    <a href="https://calendly.com/pawel-masior/let-s-talk" className="py-2 px-4 border-1 bg-teal-600 opacity-90 hover:opacity-100 hover-up-2 border-white rounded-xl text-center shadow-lg">
                        <div className="flex justify-center">
                            <h2 className="pt-0 text-white text-center font-medium text-xl lg:text-2xl">
                            ☕ Let's talk
                            </h2>
                        </div>
                    </a>
                </div>   
            </section>
            </Layout>
        </>
    );
};

export default Index;
