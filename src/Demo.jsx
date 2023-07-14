import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';



export default function Demo() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1bh-header"
        >
     <Grid container>

  <Grid xs={4}> 
    <Typography>Pratik Patel</Typography>
  </Grid>
  <Grid xs={8}>
  <Grid container>
    <Grid xs={4}>Aspire Softserv Private Limited </Grid>
    <Grid xs={4}>20 Jun 2023 - 22 Jul 2023</Grid>
    <Grid xs={2}>200 of 200</Grid>
    <Grid xs={2}>$20/Monthly</Grid>

  </Grid>
  </Grid>
  {/* <Grid item xs={3}>
    <>Aspire Softserv Private Limited</>
  </Grid>
  <Grid item xs={3}>
    <>20 Jun 2023-22 July 2023</>
  </Grid>
  <Grid item xs={1}>
    <>200 of 200</>
  </Grid>
  <Grid item xs={1}>
    <>$20/mont</>
  </Grid> */}
</Grid>
 
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
    
   
    </div>
  );
}
