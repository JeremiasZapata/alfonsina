import React, { useEffect, useState } from "react";
import "./RoadMap.css"
import LeftArrow from "./img/LeftArrow.svg"
import { Nube } from "./Nube"

// import { Scrollama, Step } from 'react-scrollama';

// MapaConceptualTittleContainer
// MapaConceptualConditionalContainer
// MapaConceptualCloudContainer
// MapaConceptualResultContainer

export const RoadMap = () =>{
    return(
        <div className="RoadMap">
            <div className="RoadMapGrid">
                <div className="RoadMapTittleContainer">
                    <div className="RoadMapTittleText">
                    ¡Elegí el curso ideal para vos!
                    </div>
                </div>
                <div className="MapaConceptualTittleContainer">
                    <div className="ArrowContainer ArrowLeftContainer">
                        <div className="Arrow">
                            <img src={LeftArrow} alt="LeftArrow" />
                        </div>
                    </div>
                    <div className="CoreTittleContainer">
                        <div className="MapaTittleContainer">
                        ¿Ya tenés conocimientos?
                        </div>
                    </div>
                    <div className="ArrowContainer">
                        <div className="Arrow ArrowRight">
                            <img src={LeftArrow} alt="RightArrow" />
                        </div>
                    </div>
                </div>
                <div className="MapaConceptualConditionalContainer">
                    <div className="ConditionalLeftContainer">
                        <div className="Circle">
                        Sí
                        </div>
                    </div>
                    <div className="SpaceBetween">

                    </div>
                    <div className="ConditionalRightContainer">
                        <div className="Circle">
                        No
                        </div>
                    </div>
                </div>
                <div className="MapaConceptualCloudContainer">
                    <div className="CloudContainer">
                        <div className="Cloud">
                            <div className="FlechaContainer">
                                <div className="Flecha">

                                </div>
                                <div className="FlechaPunta">

                                </div>
                            </div>
                            <div className="NubeContainer">
                                <Nube/>
                                <div className="NubeText">
                                Te recomendamos
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="SpaceBetween">

                    </div>
                    <div className="CloudContainerRight">
                        <div className="CloudRight">
                            <div className="FlechaContainer">
                                <div className="Flecha">

                                </div>
                                <div className="FlechaPunta">

                                </div>
                            </div>
                            <div className="NubeContainer">
                                <Nube/>
                                <div className="NubeText">
                                Te recomendamos
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="MapaConceptualResultContainer">

                </div>
            </div>
        </div>
    )
}