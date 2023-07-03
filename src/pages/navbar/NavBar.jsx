// import React from "react";
// import './NavBar.css'
// import { Link } from 'react-router-dom'
// import { Navbar, Nav } from 'react-bootstrap'; // Importa los componentes necesarios de react-bootstrap

// export const NavBar = () =>{
//     return(
//         <div>
//             <Navbar expand="lg  NavBar">
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Brand className="NavBarBrand"></Navbar.Brand>
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="ml-auto">
//                         <Link to="/" className="LinkNavBar">Home</Link>
//                         <Link to="/cursos" className="LinkNavBar">Cursos</Link>
//                         <Link to="/nosotras" className="LinkNavBar">Sobre Nosotras</Link>
//                         <Link to="/contacto" className="LinkNavBar">Contacto</Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>
//         </div>
//     );
// }


import React from "react";
import './NavBar.css'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';

export const NavBar = () => {
  return (
    <div>
      <div className="NavBarBrandWrapper">
        <Navbar.Brand className="NavBarBrand"></Navbar.Brand>
      </div>
      <Navbar expand="lg" className="NavBar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="LinkNavBar">Home</Link>
            <Link to="/cursos" className="LinkNavBar">Cursos</Link>
            <Link to="/nosotras" className="LinkNavBar">Sobre Nosotras</Link>
            <Link to="/contacto" className="LinkNavBar">Contacto</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}









