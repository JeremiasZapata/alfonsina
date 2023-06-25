import './HeroCursos.css';
import 'materialize-css/dist/css/materialize.min.css';

export const HeroCursos = ({handleScrollTo}) => {

    return(
        <div className="HeroCursosContainer">
            <div className="ComponentContainer">
                <div className="CursosSubTituloClass">Lorem ipsum dolor sit amet consectetur.</div>
                <div className="CursosTituloClass">Lorem ipsum dolor sit amet consectetur.</div>
                <button 
                    className="waves-effect waves-light btn BtnVerMas"
                    onClick={() => handleScrollTo()}
                >VER MÁS</button>
            </div>
        </div>
    );
}