import Head from "next/head";
import React, { useState } from "react";
import BackToTop from "../elements/BackToTop";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
  const [hiddenClass, setHiddenClass] = useState("hidden");

  const handleHidden = () => setHiddenClass("");

  const handleRemove = () => {
    if (hiddenClass === "") {
      setHiddenClass("hidden");
    }
  };

  return (
    <>
      <Head>
        <title>Dalongo</title>
        <meta property="title" content="Dalongo"/>
        <link rel="shortcut icon" href="/assets/imgs/logos/favicon.svg"/>
        <meta
          name="description"
          content="Plan your perfect holiday with personalized travel insights."
        />
        <meta
          name="keywords"
          content="travel, personalized guide, trip planning, activities, accommodations, events"
        />
        <meta property="og:title" content="Dalongo"/>
        <link property="og:shortcut icon" href="/assets/imgs/logos/favicon.png"/>
        <meta
          property="og:description"
          content="Plan your perfect holiday with personalized travel insights."
        />
        <meta
          property="og:keywords"
          content="travel, personalized guide, trip planning, activities, accommodations, events"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
          integrity="sha512-Eak/29OTpb36LLo2r47IpVzPBLXnAMPAVypbSZiZ4Qkf8p/7S/XRG5xp7OKWPPYfJT6metI+IORkR5G8F900+g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>
        <script>new WOW().init();</script>
      </Head>
      <div className="main text-body" style={{ fontFamily: "Comfortaa, sans-serif" }}>
        <ToastContainer/>
        <Header handleHidden={handleHidden}/>
        <MobileMenu hiddenClass={hiddenClass} handleRemove={handleRemove}/>
        {children}
        <Footer/>
        <BackToTop/>
      </div>
    </>
  );
};

export default Layout;
