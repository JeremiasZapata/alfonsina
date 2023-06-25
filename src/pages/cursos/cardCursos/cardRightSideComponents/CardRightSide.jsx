import React from "react";
import "./CardRightSide.css"
import { DetalleCursada } from "./detalleCursada/DetalleCursada"
import { InfoCursada } from "./infoCursada/InfoCursada"

export const CardRightSide = ({curso}) => {
    return(
        <div className="CardRightSide">
            <div className="NivelCursoText">
                {curso.nivel.nombre} - {curso.nivel.descripcion}
            </div>
            <DetalleCursada curso={curso}/>
            <hr className="LineaDivisoria"/>
            <InfoCursada curso={curso}/>
        </div>
    );
}