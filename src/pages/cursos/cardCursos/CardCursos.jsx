import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
                    // source={'../../../Data/tecnicaturaInicialFoto.png'}
                />
                <CardContent className='CardTittleContainer'>
                    <div className='CardTittle'>
                    {curso.nombre}
                    </div>
                </CardContent>
                <CardActions className='CardButtonContainer'>
                    <Button className='waves-effect waves-light btn CardButton' size="small">Ver más</Button>
                </CardActions>
            </Card>
        </div>
    );
}