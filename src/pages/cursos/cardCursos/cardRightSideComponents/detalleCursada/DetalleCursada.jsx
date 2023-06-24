import React from "react";
import "./DetalleCursada.css"
import icoLocation from "../../../../../Icons/location.svg"
import icoCalendar from "../../../../../Icons/calendar.svg"
import icoClock from "../../../../../Icons/clock.svg"


export const DetalleCursada = () => {
    return(
        <div className="DetalleCursadaContainer">
            <div className="IcoLocation">
                <img alt="icoLocation" src={icoLocation} />
            </div>
            <div className="DetalleModalidadContainer">
                <div className="DetalleModalidadTitulo">
                    Modalidad:
                </div>
                <div className="DetalleModalidad">Presencial</div>
            </div>
            <div className="IcoCalendar">
                <img alt="icoCalendar" src={icoCalendar} />
            </div>
            <div className="DetalleDuracionContainer">
                <div className="DetalleDuracionTitulo">
                    Duración:
                </div>
                <div className="DetalleDuracion">5 meses</div>
            </div>
            <div className="IcoClock">
                <img alt="icoClock" src={icoClock} />
            </div>
            <div className="DetalleFrecuenciaContainer">
                <div className="DetalleFrecuenciaTitulo">
                    Frecuencia:
                </div>
                <div className="DetalleFrecuencia">1 clase semanal de 3hs</div>
            </div>
        </div>
    );
}