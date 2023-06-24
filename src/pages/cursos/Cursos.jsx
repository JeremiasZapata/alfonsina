import React, { useEffect, useState } from "react";
import { HeroCursos } from "./heroCursos/HeroCursos"
import { CardCursos } from "./cardCursos/CardCursos"
import "./Cursos.css";

import MOCK_DATA from '../../Data/mockCursos.json'

export const pedirDatos = (bool) => {
    return new Promise((resolve, reject) => {
        // cuerpo de la promesa
        setTimeout(()=>{
            resolve(MOCK_DATA)
        }, 500)
    })
}

export const Cursos = () => {
    const [datosCursos, setDatosCursos] = useState([]);

    useEffect(() => {
        const obtenerDatos = async () => {
        try {
            const datos = await pedirDatos();
            setDatosCursos(datos);
        } catch (error) {
            console.error("Error al obtener los datos de los cursos:", error);
        }
        };

        obtenerDatos();
    }, []);

    console.log(datosCursos)
    return(
        <div className="containerCursos">
            <HeroCursos/>
            <div className="containerDivCursos">
                {
                    datosCursos.map((curso) => (
                        <CardCursos key={curso.nombre}/>
                    ))
                }
            </div>
        </div>
    );
}