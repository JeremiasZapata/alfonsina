import React from 'react';
import Paper from '@mui/material/Paper';
import './TemarioCurso.css'
import { Scrollbars } from 'react-custom-scrollbars';

export const TemarioCurso = ({ curso }) => {
    return (
        <Paper className="TemasCursoContainer" >
            <Scrollbars>
                <ol className="lista InfoText">
                    {
                        curso.temario.map((tema) => (
                        <li key={tema}>
                            {tema}
                        </li>
                        ))
                    }
                </ol>
            </Scrollbars>
        </Paper>
    );
};