import React from "react";
import "./DetalleCursada.css"
import icoLocation from "../../../../Icons/location.svg"
import icoCalendar from "../../../../Icons/calendar.svg"
import icoClock from "../../../../Icons/clock.svg"


export const DetalleCursada = ({curso}) => {
    return(
        <div className="DetalleCursadaContainer">
            <div className="DetalleContainer">
                <div className="Ico">
                    <img alt="icoLocation" src={icoLocation} />
                </div>
                <div className="DetalleTitulo">
                Modalidad:
                </div>
                <div className="Detalle">{curso.modalidad}</div>
            </div>
            <div className="DetalleContainer">
                <div className="Ico">
                    <img alt="icoCalendar" src={icoCalendar} />
                </div>
                <div className="DetalleTitulo">
                Duración:
                </div>
                <div className="Detalle">{curso.duracion}</div>
            </div>
            <div className="DetalleContainer">
                <div className="Ico">
                    <img alt="icoClock" src={icoClock} />
                </div>
                <div className="DetalleTitulo">
                Frecuencia:
                </div>
                {
                    curso.frecuencia.clasesSemanal === 1
                    ?<div className="Detalle">{curso.frecuencia.clasesSemanal} clase semanal de {curso.frecuencia.duracionHoras}hs</div>
                    :<div className="Detalle">{curso.frecuencia.clasesSemanal} clases semanales de {curso.frecuencia.duracionHoras}hs</div>
                }
            </div>
        </div>
    );
}