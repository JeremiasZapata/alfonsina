import React from "react";
import "./CardRightSide.css"
import { DetalleCursada } from "./detalleCursada/DetalleCursada"
import { InfoCursada } from "./infoCursada/InfoCursada"

export const CardRightSide = () => {
    return(
        <div className="CardRightSide">
            <div className="NivelCursoText">
                Inicial - No requiere conocimientos previos
            </div>
            <DetalleCursada/>
            <hr className="LineaDivisoria"/>
            <InfoCursada/>
        </div>
    );
}