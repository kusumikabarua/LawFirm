import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import styles from './BaseAccordion.module.css'

export default function BasicAccordion({title,content}) {
  return (
   
      <Accordion   className={styles.wrapper}>
        <AccordionSummary
          expandIcon={<AddCircleIcon sx={{ color: "yellow" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         
        >
          <Typography >{title}</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.content}>
          <Typography >
           {content}
          </Typography>
        </AccordionDetails>
      </Accordion> 
 
  );
}