import React from "react";
import { HeroCursos } from "./heroCursos/HeroCursos"
import { CardCursos } from "./cardCursos/CardCursos"
import "./Cursos.css";

export const Cursos = () => {
    return(
        <div className="containerCursos">
            <HeroCursos/>
            <div className="containerDivCursos">
                <CardCursos/>
            </div>
        </div>
    );
}