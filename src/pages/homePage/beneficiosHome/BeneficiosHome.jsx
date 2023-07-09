import React from "react";
import "./BeneficiosHome.css"
import iconCertificate from './icons/001-certificate.svg'
import iconTraining from './icons/002-training.svg'
import iconManicure from './icons/manicure.svg'


export const BeneficiosHome = () =>{
    return(
        <div className="BeneficiosHome">
            <div className="BeneficiosHomeContainer">
                <div className="BeneficiosHomeTittleContainer">
                    <div className="BeneficiosHomeTittle">
                    Descubrí los beneficios que te brindamos en nuestra academia
                    </div>
                </div>
                <div className="BeneficiosContainer">
                    <div className="BeneficioBox">
                        <div className="IconBeneficioContainer">
                            <img className="iconCertificateStyle" alt="iconCertificate" src={iconCertificate} />
                        </div>
                        <div className="IconBeneficioTittleContainer">
                        Certificado de finalización de curso.
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                    </div>
                    <div className="BeneficioBox">
                        <div className="IconBeneficioContainer">
                            <img className="iconTrainingStyle" alt="iconTraining" src={iconTraining} />
                        </div>
                        <div className="IconBeneficioTittleContainer">
                        Experiencia de aprendizaje personalizada enfocada en cada alumno.
                        </div>
                    </div>
                    <div className="BeneficioBox">
                        <div className="IconBeneficioContainer">
                            <img className="iconManicureStyle" alt="iconManicure" src={iconManicure} />
                        </div>
                        <div className="IconBeneficioTittleContainer">
                        Contenido atualizado con las últimas tendencias.
                        </div>
                    </div>
                </div>
                <div className="BeneficiosContainer2">
                    <div className="BeneficioBox2">
                        <div className="IconBeneficioContainer">
                            <img className="iconManicureStyle" alt="iconManicure" src={iconManicure} />
                        </div>
                        <div className="IconBeneficioTittleContainer">
                        Contenido atualizado con las últimas tendencias.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}