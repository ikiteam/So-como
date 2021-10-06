/* eslint-disable */
import React, {useEffect, useRef, useState} from 'react';

const Navbar = () => {
    const [navOpen,setNavOpen] = useState(false)

    return (
        <div className={`navbar ${navOpen ? "open" : ""}`}  >
           <div className="icone" onClick={() => setNavOpen(!navOpen)}>
               <div/>
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