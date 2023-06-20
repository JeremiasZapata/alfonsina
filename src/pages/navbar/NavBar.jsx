import React from "react";
import './NavBar.css'
import { Link } from 'react-router-dom'

export const NavBar = () =>{
    return(
        <div className="NavBar">
            <Link to="/" className="LinkNavBar">Home</Link>
            <Link to="/cursos" className="LinkNavBar">Cursos</Link>
            <Link to="/nosotras" className="LinkNavBar">Sobre Nosotras</Link>
            <Link to="/contacto" className="LinkNavBar">Contacto</Link>
        </div>
    );
}