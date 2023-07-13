import React from "react";
import './Hero2Home.css'
import 'materialize-css/dist/css/materialize.min.css';

export const Hero2Home = () =>{
    return(
        <div className="Hero2HomePage">
            <div className="LeftHero2Container">
                <div className="Hero2HomeSubTitleContainer">
                    <div className="Hero2HomeSubTitleText">Equipo docente</div>
                </div>
                <div className="Hero2HomeTitleContainer">
                    <div className="Hero2HomeTitleText">
                    Tu guía en el camino hacia la excelencia del arte de las uñas.
                    </div>
                    <div className="Hero2Text">
                        <p>
                        Con su amplia experiencia y conocimientos, te brindarán las herramientas necesarias para perfeccionar tus habilidades y alcanzar tus metas en este apasionante mundo. 
                        </p>

                    </div>
                </div>
                {/* <div className="FotoContainer">

                </div> */}

                <button className="waves-effect waves-light btn BtnContactar">
                    Ver mas
                </button>
            </div>
            <div className="RightHero2Container">

            </div>
        </div>
    );
}