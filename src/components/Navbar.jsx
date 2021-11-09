/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import {Link} from "react-router-dom";


const Navbar = (props) => {
    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 160 && !props.isMobile) {
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
        <div className={`navbar ${navOpen ? "open" : ""} ${scrolled ? "scroll" : ""}`}  >
            <div className="icone" onClick={() => setNavOpen(!navOpen)}>
                <div />
            </div>
            <ul>
                <li className="linkNav"><Link to="/">Accueil</Link></li>
                <li className="linkNav"><a href="#apropos">A propos</a></li>
                <li className="linkNav"><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}



export default Navbar;