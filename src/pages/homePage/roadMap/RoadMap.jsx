import React, { useEffect, useState } from "react";
import "./RoadMap.css"
import LeftArrow from "./img/LeftArrow.svg"

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

                        </div>
                    </div>
                    <div className="SpaceBetween">

                    </div>
                    <div className="ConditionalRightContainer">
                        <div className="Circle">

                        </div>
                    </div>


                </div>
                <div className="MapaConceptualCloudContainer">

                </div>
                <div className="MapaConceptualResultContainer">

                </div>
            </div>
        </div>
    )
}