import React from "react";
import './NavBar.css'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../assets/Logotipo-1.png'


export const NavBar = () => {
  return (
    <div>
      <div className="NavBarBrandWrapper">
        <div className="NavBarBrand">
          <img className="Logo" alt="Logo" src={Logo} />
        </div>
      </div>
      <div className="NavBar">
        <Link to="/" className="LinkNavBar">Home</Link>
        <Link to="/cursos" className="LinkNavBar">Cursos</Link>
        <Link to="/nosotras" className="LinkNavBar">Sobre Nosotras</Link>
        <Link to="/contacto" className="LinkNavBar">Contacto</Link>
      </div>

      {/* <Navbar expand="lg" className="NavBar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="LinkNavBar">Home</Link>
            <Link to="/cursos" className="LinkNavBar">Cursos</Link>
            <Link to="/nosotras" className="LinkNavBar">Sobre Nosotras</Link>
            <Link to="/contacto" className="LinkNavBar">Contacto</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
    </div>
  );
}










