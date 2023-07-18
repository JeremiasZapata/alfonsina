import React, { useEffect, useState } from "react";
import "./BeneficiosHome.css"
import iconCertificate from './icons/001-certificate.svg'
import iconTraining from './icons/002-training.svg'
import iconManicure from './icons/manicure.svg'

import { Scrollama, Step } from 'react-scrollama';

export const BeneficiosHome = () =>{

    const [isAnimationActive, setAnimationActive] = useState(false);
    const [hasAnimationActivated, setHasAnimationActivated] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
            const scrollProgress = scrollTop / (scrollHeight - clientHeight);
            // Define la lógica para activar la animación cuando se cumpla cierta condición de scroll.
            if (scrollProgress >= 0.1 && !hasAnimationActivated) {
                setAnimationActive(true);
                setHasAnimationActivated(true)
            }
    }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasAnimationActivated]);

    return(
        <div className="BeneficiosHome">
            <div className="BeneficiosHomeContainer">
                <div className="BeneficiosHomeTittleContainer">
                    <div className="BeneficiosHomeTittle">
                    Descubrí los beneficios que te brindamos en nuestra academia
                    </div>
                </div>
                <div className="BeneficiosContainer">
                    <Scrollama>
                        <Step data={{ id: 'trigger' }}>
                            <div className={`animated-element ${isAnimationActive ? 'active1' : ''}`}>
                                <div className="BeneficioBox">
                                    <div className="IconBeneficioContainer">
                                        <img className="iconCertificateStyle" alt="iconCertificate" src={iconCertificate} />
                                    </div>
                                    <div className="IconBeneficioTittleContainer">
                                    Certificado de finalización de curso.
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </div>
                                </div>
                            </div>
                        </Step>
                    </Scrollama>
                    <Scrollama>
                        <Step data={{ id: 'trigger' }}>
                            <div className={`animated-element ${isAnimationActive ? 'active2' : ''}`}>
                                <div className="BeneficioBox">
                                    <div className="IconBeneficioContainer">
                                        <img className="iconTrainingStyle" alt="iconTraining" src={iconTraining} />
                                    </div>
                                    <div className="IconBeneficioTittleContainer">
                                    Experiencia de aprendizaje personalizada enfocada en cada alumno.
                                    </div>
                                </div>
                            </div>
                        </Step>
                    </Scrollama>
                    <Scrollama>
                    <Step data={{ id: 'trigger' }}>
                            <div className={`animated-element ${isAnimationActive ? 'active3' : ''}`}>
                                <div className="BeneficioBox last">
                                    <div className="IconBeneficioContainer">
                                        <img className="iconManicureStyle" alt="iconManicure" src={iconManicure} />
                                    </div>
                                    <div className="IconBeneficioTittleContainer">
                                    Contenido atualizado con las últimas tendencias.
                                    </div>
                                </div>
                            </div>
                        </Step>
                    </Scrollama>
                </div>
                <div className="BeneficiosContainer2">
                    <Scrollama>
                        <Step data={{ id: 'trigger' }}>
                            <div className={`animated-element ${isAnimationActive ? 'active3' : ''}`}>
                                <div className="BeneficioBox2">
                                    <div className="IconBeneficioContainer">
                                        <img className="iconManicureStyle" alt="iconManicure" src={iconManicure} />
                                    </div>
                                    <div className="IconBeneficioTittleContainer">
                                    Contenido atualizado con las últimas tendencias.
                                    </div>
                                </div>
                            </div>
                        </Step>
                    </Scrollama>
                </div>
            </div>
        </div>
    );
}