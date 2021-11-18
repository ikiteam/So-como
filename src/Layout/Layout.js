import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ title, classe, children }) => {

    const [isMobile, setIsMobile] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);


    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }


    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        setIsMobile(width <= 768 ? true : false);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);

        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className={classe}>
            <Navbar isMobile={isMobile} />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;