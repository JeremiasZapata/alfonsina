import React, { useEffect, useState } from "react";
import "./RoadMap.css";
import { Nube } from "./Nube";
import { CompactRoadMap } from "./compactRoadMap/CompactRoadMap"

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
                            <div className="FlechaLPunta"/>
                        </div>
                    </div>
                    <div style={{width:'2%'}}/>
                    <div className="CoreTittleContainer">
                        <div className="MapaTittleContainer">
                        ¿Ya tenés conocimientos?
                        </div>
                    </div>
                    <div style={{width:'2%'}}/>
                    <div className="ArrowContainer">
                        <div className="Arrow ArrowRight">
                            <div className="FlechaLPuntaDer"/>
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
                                <div className="Flecha"/>
                                <div className="FlechaPunta"/>
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
                                <div className="Flecha"/>
                                <div className="FlechaPunta"/>
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
                    <div className="MapaConceptualResultTrue">
                        <div className="ResultadoContainer">
                        Soft Gel
                        </div>
                        <div className="ResultadoContainer">
                        Nail Art - Integral Nivel 1
                        </div>
                        <div className="ResultadoContainer">
                        Nail Art - Vida Silvestre
                        </div>
                    </div>
                    <div className="SpaceBetween2"></div>
                    <div className="MapaConceptualResultFalse">
                        <div className="ResultadoContainer">
                        Tecnicatura Inicial
                        </div>
                        <div className="ResultadoContainer">
                        Semipermanente y Capping
                        </div>
                    </div>
                </div>
                <CompactRoadMap/>
            </div>
        </div>
    )
}