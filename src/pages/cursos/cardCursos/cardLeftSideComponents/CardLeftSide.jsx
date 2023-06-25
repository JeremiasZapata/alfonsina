import React from "react";
import "./CardLeftSide.css"

export const CardLeftSide = ({curso}) => {
    return(
        <div className="CardLeftSide">
                {
                    curso.incluyeCertificao
                    ?<div className="InfoCertificado">
                        <p className="textCertificado">¡Incluye certificado de aprobación!</p>
                    </div>
                    :<div className="HideInfoCertificado"></div>
                }
            <div className="TituloCursoContainer">
                {curso.nombre}
            </div>
        </div>
    );
}