/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { HashLink as Linker } from 'react-router-hash-link';


const Navbar = (props) => {
    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 160) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    });




    return (
        <div className={`navbar ${navOpen ? "open" : ""} ${props.isMobile ? "mobile" : ""} ${scrolled ? "scroll" : ""}`}  >
            <div className="icone" onClick={() => setNavOpen(!navOpen)}>
                <div />
            </div>
            <ul>
                <li className="linkNav"><Link to="/">Accueil</Link></li>
                <li className="linkNav"><Linker to="/#apropos">A propos</Linker></li>
                <li className="linkNav"><Linker to="/#contact">Contact</Linker></li>
            </ul>
        </div>
    )
}



export default Navbar;