import React from "react";
import { HeroSobreNosotras } from "./heroSobreNosotras/HeroSobreNosotras"
import Bienvenida from "./bienvenida/Bienvenida";
import '../sobreNosotras/SobreNosotras.css'

export const SobreNosotras = () => {
    return(
        <div className="containerSobreNosotras">
            <HeroSobreNosotras/>
            <Bienvenida/>
        </div>
    );
}