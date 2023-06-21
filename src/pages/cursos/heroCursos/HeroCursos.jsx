import React, { useEffect } from "react";
import './HeroCursos.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

export const HeroCursos = () => {
    useEffect(() => {
        M.AutoInit();
    }, []);

    return(
        <div className="HeroCursosClass">
            <div className="ComponentContainer">
                <div className="CursosSubTituloClass">Lorem ipsum dolor sit amet consectetur.</div>
                <div className="CursosTituloClass">Lorem ipsum dolor sit amet consectetur.</div>
                <button className="waves-effect waves-light btn BtnVerMas">VER MÁS</button>

            </div>
        </div>
    );
}