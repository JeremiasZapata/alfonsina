import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import MOCK_DATA from '../../../Data/mockCursos.json';

import './CursoDetail.css';

import { DetalleCursada } from './detalleCursada/DetalleCursada';
import { TemarioCurso } from './temarioCurso/TemarioCurso'

export const pedirDatos = (bool) => {
    return new Promise((resolve, reject) => {
        // cuerpo de la promesa
        setTimeout(()=>{
            resolve(MOCK_DATA)
        }, )
    })
}

export const CursoDetail = () => {

    const [curso, setCurso] = useState(null);
    const { cursoId } = useParams()


    useEffect(() => {
        const obtenerDatos = async () => {
        try {
            const datos = await pedirDatos();
            setCurso(datos.find(dato => dato.id === Number(cursoId)))
        } catch (error) {
            console.error("Error al obtener los datos de los cursos:", error);
        }
        };
        obtenerDatos();
    }, [cursoId]);

    if(curso != undefined){
        const imgFolder = require.context('../../assets/fotosCursos', false, /\.(png|jpe?g|svg)$/)
        const defaultFoto = "defaultFoto.png"
        const img_node = imgFolder(`./${curso.foto?curso.foto:defaultFoto}`);

        return(
            <div className="CursoContainer">
                <div className="NivelCursoContainer">
                    {curso.nivel.nombre} - {curso.nivel.descripcion}
                </div>
                <div className="NombreCursoContainer">
                {curso.nombre}
                </div>
                <DetalleCursada curso={curso}/>
                <hr className="LineaDivisoria"/>
                <div className="CursoDetalle">
                    <div className="LeftCursoDetalle">
                        <div className="TittleContainer">
                        Temario general
                        </div>
                        <TemarioCurso curso={curso}/>
                        <div className="CertificadoContainer">
                            {curso.incluyeCertificao
                                ?<div className="CertificadoText">¡Incluye certificado de aprobación!</div>
                                :<div></div>
                            }
                        </div>
                        <div className="SobreKitContainer">
                            <div className="SobreKitText">Kit de uñas</div>
                            <div className="AvisoContainer">En nuestra academia no prestamos ningún kit, sino que alentamos a los estudiantes para que compren uno propio. Nuestro objetivo es alentar que sigan sus prácticas fuera de la clase.</div>
                        </div>
                    </div>
                    <div className="RightCursoDetalle">
                        <img src={img_node} alt="foto curso" style={{objectFit:'cover', objectPosition:'center'}}></img>
                    </div>
                </div>
            </div>
        )
    }
}