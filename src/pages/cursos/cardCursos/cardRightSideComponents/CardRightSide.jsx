import React from "react";
import "./CardRightSide.css"
import icoLocation from "../../../../Icons/location.svg"
import icoCalendar from "../../../../Icons/calendar.svg"
import icoClock from "../../../../Icons/clock.svg"


export const CardRightSide = () => {
    return(
        <div className="CardRightSide">
            <div className="NivelCursoText">
                Inicial - No requiere conocimientos previos
            </div>
            <div className="DetalleCursadaContainer">
                <div className="IcoLocation">
                    <img alt="icoLocation" src={icoLocation} />
                </div>
                <div class="DetalleModalidadContainer">
                    <div className="DetalleModalidadTitulo">
                        Modalidad:
                    </div>
                    <div className="DetalleModalidad">Presencial</div>
                </div>
                <div className="IcoCalendar">
                    <img alt="icoCalendar" src={icoCalendar} />
                </div>
                <div class="DetalleDuracionContainer">
                    <div className="DetalleDuracionTitulo">
                        Duración:
                    </div>
                    <div className="DetalleDuracion">5 meses</div>
                </div>
                <div className="IcoClock">
                    <img alt="icoClock" src={icoClock} />
                </div>
                <div class="DetalleFrecuenciaContainer">
                    <div className="DetalleFrecuenciaTitulo">
                        Frecuencia:
                    </div>
                    <div className="DetalleFrecuencia">1 clase semanal de 3hs</div>
                </div>
            </div>
            <hr className="LineaDivisoria"/>
        </div>
    );
}