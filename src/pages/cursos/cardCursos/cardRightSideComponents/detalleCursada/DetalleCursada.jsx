import React from "react";
import "./DetalleCursada.css"
import icoLocation from "../../../../../Icons/location.svg"
import icoCalendar from "../../../../../Icons/calendar.svg"
import icoClock from "../../../../../Icons/clock.svg"


export const DetalleCursada = ({curso}) => {
    return(
        <div className="DetalleCursadaContainer">
            <div className="IcoLocation">
                <img alt="icoLocation" src={icoLocation} />
            </div>
            <div className="DetalleModalidadContainer">
                <div className="DetalleModalidadTitulo">
                    Modalidad:
                </div>
                <div className="DetalleModalidad">{curso.modalidad}</div>
            </div>
            <div className="IcoCalendar">
                <img alt="icoCalendar" src={icoCalendar} />
            </div>
            <div className="DetalleDuracionContainer">
                <div className="DetalleDuracionTitulo">
                    Duración:
                </div>
                <div className="DetalleDuracion">{curso.duracion}</div>
            </div>
            <div className="IcoClock">
                <img alt="icoClock" src={icoClock} />
            </div>
            <div className="DetalleFrecuenciaContainer">
                <div className="DetalleFrecuenciaTitulo">
                    Frecuencia:
                </div>
                {
                    curso.frecuencia.clasesSemanal === 1
                    ?<div className="DetalleFrecuencia">{curso.frecuencia.clasesSemanal} clase semanal de {curso.frecuencia.duracionHoras}hs</div>
                    :<div className="DetalleFrecuencia">{curso.frecuencia.clasesSemanal} clases semanales de {curso.frecuencia.duracionHoras}hs</div>
                }
            </div>
        </div>
    );
}