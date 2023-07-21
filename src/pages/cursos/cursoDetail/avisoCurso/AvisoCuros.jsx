import React from "react";
import "./AvisoCurso.css"

export const AvisoCurso = () => {
    return(
        // <div className="AvisoContainer">En nuestra academia no prestamos ningún kit, sino que alentamos a los estudiantes para que compren uno propio. Nuestro objetivo es alentar que sigan sus prácticas fuera de la clase.</div>

        <p className="AvisoContainer">
        En nuestra academia <span class="ColorPalabra">no prestamos ningún kit</span> , sino que alentamos a los estudiantes para que 
        <span class="ColorPalabra">compren uno propio</span>. Nuestro objetivo es alentar que <span class="ColorPalabra">sus prácticas </span>fuera de la clase.
        </p>

    )
}