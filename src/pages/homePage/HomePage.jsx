import React from "react";
import "./HomePage.css"
import { HeroHomePage } from "./heroHomePage/HeroHomePage"
import { BeneficiosHome } from "./beneficiosHome/BeneficiosHome"
import { RoadMap } from "./roadMap/RoadMap"
import { Hero2Home } from "./hero2Home/Hero2Home";

export const HomePage = () =>{
    return(
        <>
            <HeroHomePage/>
            <BeneficiosHome/>
            <RoadMap/>
            <Hero2Home/>
        </>
    );
}