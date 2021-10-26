/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';


const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 160 && !isMobile) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleWindowSizeChange);
        setIsMobile(width <= 768 ? true : false);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
            window.removeEventListener('scroll', handleScroll)
        }
    });






    return (
        <div className={`navbar ${navOpen ? "open" : ""} ${scrolled ? "scroll" : ""}`}  >
            <div className="icone" onClick={() => setNavOpen(!navOpen)}>
                <div />
            </div>
            <ul>
                <li className="linkNav"><a href="#">Accueil</a></li>
                <li className="linkNav"><a href="#">A propos</a></li>
                <li className="linkNav"><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}



export default Navbar;