import React from "react";
import "./HomePage.css"
import { HeroHomePage } from "./heroHomePage/HeroHomePage"
import { BeneficiosHome } from "./beneficiosHome/BeneficiosHome"

export const HomePage = () =>{
    return(
        <>
            <HeroHomePage/>
            <BeneficiosHome/>
        </>
    );
}