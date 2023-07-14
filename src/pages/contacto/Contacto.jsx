import React from "react";
import './Contacto.css'
import { HeroContacto } from './heroContacto/HeroContacto'
import  CompactAcordeon  from './acordeon/CompactAcordeon'



export const Contacto = () => {
    return(
    <div>
        <div className="containerContacto">
            <HeroContacto/>
        </div>
        <div className="acordeonContainer">
            <div className="acordeonTitulo">
                Titulo
            </div>
            <div className="acordeon">
            <CompactAcordeon/>
            </div>
        </div>
    </div>
    );
}