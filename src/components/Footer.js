import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer>
            <div className="logo">
                <Logo />
                <h3>Socomo</h3>
            </div>
            <div className="link">
                <ul>
                    <li>
                        <Link to="/mention-legal">Mentions légales</Link>
                    </li>
                    <li>
                        <Link to="/condition-general-vente">CGV</Link>
                    </li>
                    <li>
                        <Link to="/politique-de-confidentialité">Politique de confidentialité</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
export default Footer;