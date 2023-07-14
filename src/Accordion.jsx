import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
export default function Accordions() {
  
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          IconButtonProps={{ edge: 'start' }}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
     <Grid container>
  <Grid item xs={4}>
    <Grid>Pratik Patel</Grid>
  </Grid>
  <Grid item xs={3}>
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
  </Grid>
</Grid>
         {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={4}>
    <Grid>Purav Gandhi</Grid>
  </Grid>
  <Grid item xs={3}>
    <>Aspire Softserv Private Limited</>
  </Grid>
  <Grid item xs={3}>
    <>20 Jun 2023-22 July 2023</>
  </Grid>
  <Grid item xs={2}>
    <>500 of 500</>
  </Grid>
</Grid>
          {/* <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={4}>
    <Grid>Purav Gandhi</Grid>
  </Grid>
  <Grid item xs={3}>
    <>Aspire Softserv Private Limited</>
  </Grid>
  <Grid item xs={3}>
    <>20 Jun 2023-22 July 2023</>
  </Grid>
  <Grid item xs={2}>
    <>1000 of 1000</>
  </Grid>
</Grid>
          {/* <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Robert Fox</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
