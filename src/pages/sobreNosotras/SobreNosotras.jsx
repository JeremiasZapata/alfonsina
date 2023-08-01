import React from "react";
import { HeroSobreNosotras } from "./heroSobreNosotras/HeroSobreNosotras"
import Bienvenida from "./bienvenida/Bienvenida";

export const SobreNosotras = () => {
    return(
        <div className="containerSobreNosotras">
            <HeroSobreNosotras/>
            <Bienvenida/>
        </div>
    );
}