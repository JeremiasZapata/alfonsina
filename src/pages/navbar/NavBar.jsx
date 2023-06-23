import React from "react";
import './NavBar.css'
import { Link } from 'react-router-dom'
import logo from "./images/Isotipo-3.png";

export const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <nav class="navbar navbar-expand-lg bg-light">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">Navbar</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Features</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Pricing</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

        // <div>
        //     <nav>
        //         <div class="nav-wrapper">
        //             <a href="#" class="brand-logo">Logo</a>
        //             <ul id="nav-mobile" class="right hide-on-med-and-down">
        //                 <li><a href="sass.html">Sass</a></li>
        //                 <li><a href="badges.html">Components</a></li>
        //                 <li><a href="collapsible.html">JavaScript</a></li>
        //             </ul>
        //         </div>
        //     </nav>
        // </div>


        // <div className="NavBar">
        //     <Link className="navbar-brand" to={"/"}> <img src={logo} alt="Logo Alfonsina Jostal" width={"90"}/> </Link>
        //     <Link to="/" className="LinkNavBar">Home</Link>
        //     <Link to="/cursos" className="LinkNavBar">Cursos</Link>
        //     <Link to="/nosotras" className="LinkNavBar">Sobre Nosotras</Link>
        //     <Link to="/contacto" className="LinkNavBar">Contacto</Link>
        // </div>

    );
}