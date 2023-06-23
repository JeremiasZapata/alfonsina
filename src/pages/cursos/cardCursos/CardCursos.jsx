import React from "react";
import "./CardCursos.css"

import { CardLeftSide } from "./cardLeftSideComponents/CardLeftSide"
import { CardRightSide } from "./cardRightSideComponents/CardRightSide"

export const CardCursos = () => {
    return(
        <div className="CardCursosClass">
            <CardLeftSide/>
            <CardRightSide/>
        </div>
    );
}