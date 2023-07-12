import React from "react";
import './Contacto.css';
import { HeroContacto } from './heroContacto/HeroContacto';
import { AcordeonContacto } from './acordeon/Acordeon.jsx/'






export const Contacto = () => {
    return(
    <div className="containerContacto">
        <div><HeroContacto/></div>
        <div><AcordeonContacto/></div>
    </div>
    );
}