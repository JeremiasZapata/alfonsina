import React from "react";
import "./InfoCursada.css"
import 'materialize-css/dist/css/materialize.min.css';

export const InfoCursada = () => {
    return(
        <div className="InfoCursadaContainer">
            <div className="InfoCursada">
                <div>Objetivos</div>
                <div className="InfoText">nunc lectus lectus. Condimentum feugiat viverra tortor ornare. Leo id ornare egestas habitasse enim porttitor accumsan vitae aliquet.</div>
            </div>
            <div className="InfoCursadaTemarioGral InfoCursada">
                <div>Temario General</div>
                <div className="InfoText">Manicuria. Esmaltado semipermanente. Capping.</div>
            </div>
            <div className="InfoCursadaDescCurso InfoCursada">
                <div>Descripción del curso</div>
                <div className="InfoText">Correcta preparación de la uña natural. Biotipos ungueales. Tipos de preparadores químicos. Retiro de cutícula profundo sin torno. Esmaltado perfecto. Tipos de gel y viscosidades. Capping con base rubber. Capping con gel. Encapsulados.</div>
            </div>
            <div className="InfoCursada">
                <div>Valor</div>
                <ol className="lista InfoText">
                    <li>Inscripción: $2500 (bonificada para ex alumnos)</li>
                    <li>Cuota única de $5500</li>
                    <li>Exámen final: bonificado (Abonando el curso en 1 solo pago tenés el exámen final bonificado)</li>
                </ol>
            </div>
            <div className="btnInscribirmeContainer">
                <button className="waves-effect waves-light btn BtnInscribirme">INSCRIBIRME</button>
            </div>
        </div>
    );
}