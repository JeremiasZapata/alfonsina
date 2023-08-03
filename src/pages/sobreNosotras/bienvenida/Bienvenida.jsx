import React from 'react';
import clase1 from "../../assets/imagenesSobreNosotras/clases1.png"
import clase2 from "../../assets/imagenesSobreNosotras/clases2.png"
import clase3 from "../../assets/imagenesSobreNosotras/clases3.png"
import './Bienvenida.css'

const TextoConImagenes = () => {
    return (
        <div className="container bienvenida">
            <h2 className='titulo'>¡Te damos la bienvenida a nuestra academia!</h2>
            <p>Somos un equipo capacitado y preparado para darte una educación de calidad. Con nuestra experiencia y dedicación, buscamos que nuestros alumnos aprendan y mejoren sus técnicas para que sean excelentes profesionales en su área.</p>
            <p>Para ello, contamos con programas actualizados, cursos presenciales en instalaciones cómodas y educadores comprometidos. También es la razón por la que no prestamos el kit de uñas y alentamos a cada estudiante obtener uno propio para que practique fuera de clase.</p>
            <div className="imagenes-container">
                <img
                    className="imagen1"
                    src={clase1}
                    alt="Descripción de la imagen 1"
                />
                <img
                    className="imagen2"
                    src={clase2}
                    alt="Descripción de la imagen 2"
                />
                <img
                    className="imagen3"
                    src={clase3}
                    alt="Descripción de la imagen 3"
                />
            </div>
        </div>
    );
};

export default TextoConImagenes;
