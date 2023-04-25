import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getLanguage, getText } from '../../locale'

export default function Questions() {
  return (
    <div className='Questions'>
      <div className="container">
        <h2 className='section-tittle'>{getText('questionsTitle')}</h2>
        <p className='section-info'>{getText('questionsFrequentlyAsked')}</p>

        <div>
          <Accordion className='accordion'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className='red' />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className='accordion-tittle'>{getText('questionsAccordionTitle1')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='text-color'>
                {getText('questionsAccordionText2')} <br />
                {getText('questionsAccordionText3')} <br />
                {getText('questionsAccordionText4')}  <br />
                {getText('questionsAccordionText5')} <br />
                {getText('questionsAccordionText6')}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className='red' />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className='accordion-tittle'>{getText('questionsAccordionTitle2')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='text-color'>
                {getText('questionsAccordionText7')}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className='red' />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className='accordion-tittle'>{getText('questionsAccordionTitle3')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='text-color'>
                {getText('questionsAccordionText8')}
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className='red' />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className='accordion-tittle'>{getText('questionsAccordionTitle4')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='text-color'>
                {getText('questionsAccordionText9')}
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className='red' />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className='accordion-tittle'>{getText('questionsAccordionTitle5')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='text-color'>
                {getText('questionsAccordionText10')} <br />
                {getText('questionsAccordionText11')} <br />
                {getText('questionsAccordionText12')} <br />
                {getText('questionsAccordionText13')} <br />
                {getText('questionsAccordionText14')} <br />
                {getText('questionsAccordionText15')}
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className='red' />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className='accordion-tittle'>{getText('questionsAccordionTitle6')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='text-color'>
               {getText('questionsAccordionText16')}
              </Typography>
            </AccordionDetails>
          </Accordion>

       </div>
      </div>
    </div>
  )
}
