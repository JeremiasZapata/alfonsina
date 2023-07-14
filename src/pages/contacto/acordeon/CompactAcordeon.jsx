import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import expandIconImg from './Arrow.svg';
import './CompactAcordeon.css'

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='acordeonContainer' style={{ margin: '0 auto',paddingTop: '100px',  width: '50%' }}>
            <Accordion expanded={expanded === 'panel1' } onChange={handleChange('panel1')} sx={{ margin: '2% 0% 0% 0%', background: 'transparent' }}>
                <AccordionSummary 
                    expandIcon={<img src={expandIconImg} alt="Expand Icon" style={{ width: '50%', height: 'auto' }} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className='tipografiaAcordeonPregunta' sx={{ width: '75%', flexShrink: 0 }}>
                    ¿Cómo me comunico con ustedes?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='tipografiaAcordeonRespuesta
'>
                    Mandanos un mensaje por WhatsApp sin dudas, te responderemos a la brevedad. 
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{margin: '2% 0% 0% 0%', background: 'transparent' }}>
                <AccordionSummary
                    expandIcon={<img src={expandIconImg} alt="Expand Icon" style={{ width: '50%', height: 'auto' }} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className='tipografiaAcordeonPregunta' sx={{ width: '75%', flexShrink: 0 }}>¿Cuál es el medio de pago para los cursos?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='tipografiaAcordeonRespuesta
'>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                        laoreet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{margin: '2% 0% 0% 0%', background: 'transparent' }}>
                <AccordionSummary
                    expandIcon={<img src={expandIconImg} alt="Expand Icon" style={{ width: '50%', height: 'auto' }} />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography className='tipografiaAcordeonPregunta' sx={{ width: '75%', flexShrink: 0 }}>
                    Lorem ipsum dolor sit amet consectetur?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='tipografiaAcordeonRespuesta
'>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='acordeonEscalon' expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ margin: '2% 0% 0% 0%',background: 'transparent' }}>
                <AccordionSummary 
                    expandIcon={<img src={expandIconImg} alt="Expand Icon" style={{ width: '50%', height: 'auto' }} />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography className='tipografiaAcordeonPregunta' sx={{ width: '75%', flexShrink: 0 }}>Lorem ipsum dolor sit amet consectetur?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='tipografiaAcordeonRespuesta
'>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
