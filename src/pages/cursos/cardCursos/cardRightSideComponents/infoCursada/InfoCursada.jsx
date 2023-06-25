import React from "react";
import "./InfoCursada.css"
import 'materialize-css/dist/css/materialize.min.css';

export const InfoCursada = ({curso}) => {
    return(
        <div className="InfoCursadaContainer">
            <div className="InfoCursada">
                <div>Objetivos</div>
                <div className="InfoText">{curso.objetivos}</div>
            </div>
            <div className="InfoCursadaTemarioGral InfoCursada">
                <div>Temario General</div>
                <div className="InfoText">{curso.temario.temarioGeneral}</div>
            </div>
            <div className="InfoCursadaDescCurso InfoCursada">
                <div>Descripción del curso</div>
                <div className="InfoText">{curso.temario.temarioDescripcion}</div>
            </div>
            <div className="InfoCursada">
                <div>Valor</div>
                <ol className="lista InfoText">
                    <li>Inscripción: {curso.valores.inscripcion.valor} {curso.valores.inscripcion.bonoficadoExAlumnos ? '(bonificada para ex alumnos)' : ''}</li>
                    {
                        curso.valores.cuota.cantidadCuotas === 1
                        ? <li>Cuota única de ${curso.valores.cuota.valor}</li>
                        : <li>{curso.valores.cuota.cantidadCuotas} cuotas de ${curso.valores.cuota.valor}</li>
                    }
                    <li>Exámen final: {curso.valores.cuota.cantidadCuotas === 1 ? 'bonificado': '$'+curso.valores.valorExamenFinal} (Abonando el curso en 1 solo pago tenés el exámen final bonificado)</li>
                </ol>
            </div>
            <div className="btnInscribirmeContainer">
                <button className="waves-effect waves-light btn BtnInscribirme">INSCRIBIRME</button>
            </div>
        </div>
    );
}