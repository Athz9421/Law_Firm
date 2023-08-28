import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ReactComponent as Btn } from '../../../Assets/accBtn.svg';

export default function BasicAccordion({ faqQuestions }) {
    return (
      <div >
        {faqQuestions.map((ele,ind) => {
          return (
            <Accordion key={ind}>
              <AccordionSummary
                expandIcon={<Btn/>}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>{ele.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{ele.content}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    );}