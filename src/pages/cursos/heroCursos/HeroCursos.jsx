import './HeroCursos.css';
import 'materialize-css/dist/css/materialize.min.css';

export const HeroCursos = ({handleScrollTo}) => {

    return(
        <div className="HeroCursosContainer">
            <div className="ComponentContainer">
                <div className="CursosSubTituloClass">Estamos esperándote</div>
                <div className="CursosTituloClass">Sumate a nuestro cursos</div>
            </div>
        </div>
    );
}