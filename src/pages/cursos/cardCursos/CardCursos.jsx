import React from "react";
import "./CardCursos.css"

import { CardLeftSide } from "./cardLeftSideComponents/CardLeftSide"
import { CardRightSide } from "./cardRightSideComponents/CardRightSide"

export const CardCursos = ({curso}) => {
    return(
        <div className="CardCursosClass">
            <CardLeftSide curso={curso}/>
            <CardRightSide curso={curso}/>
        </div>
    );
}