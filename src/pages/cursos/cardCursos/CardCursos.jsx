import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import './CardCursos.css'



export const CardCursos = ({curso}) => {

    const imgFolder = require.context('../../assets/fotosCursos', false, /\.(png|jpe?g|svg)$/)
    const defaultFoto = "defaultFoto.png"
    const img_node = imgFolder(`./${curso.foto?curso.foto:defaultFoto}`);
    
    return (
        <div className='CardContainer'>
            <Card className='Card'>
                <CardMedia className='CardPhotoContainer'
                    component="img"
                    alt="green iguana"
                    image={img_node}
                    style={{objectFit:'cover', objectPosition:'center'}}
                />
                <CardContent className='CardTittleContainer'>
                    <div className='CardTittle'>
                    {curso.nombre}
                    </div>
                </CardContent>
                <CardActions className='CardButtonContainer'>
                    <Button className='waves-effect waves-light btn CardButton' size="small">
                        <Link 
                            to={`/cursos/${curso.id}`} 
                            style={{color: 'inherit', backgroundColor:'inherit', textDecoration:'inherit'}}>
                            Ver más
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}