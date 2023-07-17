import React from "react";
import './HeroHomePage.css'
import imgHeroHome from './img/imgHeroHomePage.png'
import 'materialize-css/dist/css/materialize.min.css';

export const HeroHomePage = () =>{
    return(
        <div className="HeroHomePage">
            <div className="LeftHeroContainer">
                <div className="HeroHomeSubTitleContainer">
                    <div className="HeroHomeSubTitleText">¡Arriesgate y explotá tu creatividad!</div>
                </div>
                <div className="HeroHomeTitleContainer">
                    <div className="HeroHomeTitleText">
                        Te garantizamos un aprendizaje personalizado y lleno de desafíos
                    </div>
                </div>
                {/* <div className="FotoContainer">

                </div> */}

                <button className="waves-effect waves-light btn BtnHero">
                    Contactar
                </button>
            </div>
            <div className="RightHeroContainer">

            </div>
        </div>
    );
}