import React from "react";
import './NavBar.css'
import Logo from '../assets/Logotipo-1.png'
import { CompactNavBar } from './CompactNavBar'



export const NavBar = () => {
  return (
    <div>
      <div className="NavBarBrandWrapper">
        <div className="NavBarBrand">
          {/* <img className="Logo" alt="Logo" src={Logo} /> */}
        </div>
      </div>
      <CompactNavBar/>
    </div>
  );
}










