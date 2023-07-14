import * as React from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Copy, Calendar } from "react-feather";
import { Icon } from "@mui/material";
import Chip from '@mui/material/Chip';
import { createTheme, ThemeProvider  } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const ResizableIcon = styled(Copy)`
  width: 1.2rem;
  height: 1.5rem;
  padding: 0.3rem;
  display: grid;
`;

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
   
  },
  "&:before": {
    display: "none",
 
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ExpandMoreIcon
        sx={{ fontSize: "0.9rem" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",

 
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    // transform: "rotate(180deg)",
    marginBottom:"32px",
  
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),

  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),

}));

export default function Test() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  }

  return (
    <div>
         <ThemeProvider theme={theme}>
    <Box>
      <Box>
<Box sx={{border:"1px solid rgba(0, 0, 0, 0.20)", borderRadius:"5px"}} m="30px">
  <Box mx={3} my={3}  sx={{  borderRadius:"5px"}} p="2">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{border:"none"}}
      >
        <Box sx={{backgroundColor:"rgba(134, 134, 134, 0.08)"}}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
             sx={{ fontSize: "0.9rem",   transform:"rotate(90deg)",
       
             marginBottom:expanded?"0px":"29px"
            }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1bh-header"
        >
          <Grid container m={1.5}
          >
            <Grid xl={4} lg={4} md={4} sm={4}>
              <Typography
                sx={{
                  fontFamily: "Heebo",
                  color: "#1E1E1E",
                  fontWeight: 500,
                  fontSize: {xl:"18px", lg:"16px" , md:"14px" , sm:"12px"}, 
                }}
              >
                Pratik Patel
                <Chip label="Admin" 
                sx={{
                  backgroundColor:" #9F77EB",
                  color:"white",
                  fontFamily:"Heebo",
                  fontSize: {xl:"15px", lg:"13px" , md:"11px" , sm:"9px"}, 
                  width: {xl:"69px", lg:"70px" , md:"60px" , sm:"58px"}, 
                  height: {xl:"24px", lg:"21px" , md:"21px" , sm:"18px"},
                  
                  marginLeft:"8px",
                  fontWeight:400,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                }} />
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Heebo",
                  color: "#2B2B2B",
                  fontWeight: 400,
                  fontSize: {xl:"16px", lg:"14px" , md:"12px" , sm:"10px"}, 
                }}
              >
                pratik.patel@aspiresoftserve.com
              </Typography>
            </Grid>
            <Grid xl={8} lg={8} md={8} sm={8}>
              <Grid container>
                <Grid xs={4}>
                  <Typography
                    sx={{
                      fontFamily: "Heebo",
                      color: "#1E1E1E",
                      fontWeight: 500,
                      fontSize: {xl:"15px", lg:"13px" , md:"11px" , sm:"9px"}, 
                    }}
                  >
                    Aspire Softserv Private Limited
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Heebo",
                      color: "#2B2B2B",
                      fontWeight: 400,
                      fontSize: {xl:"15px", lg:"13px" , md:"11px" , sm:"9px"}, 
                    }}
                  >
                    Phone no.:+91 12345 123456
                  </Typography>
                </Grid>
                <Grid xs={3}>
                  <Grid container>
                    <Grid
                      xs={2}
                      align="center"   // pr={{ xl: 2, lg: 1.7, md: 1.3, sm: 1, xs: 0.7 }}
                    >
                        <Icon sx={{color:"#868686" ,
                      // fontSize: {xl:"x-large", lg:"1.5rem" , md:"0.8rem" }, 
                      height:{md:"24px" ,xl:"26px"},
                      width:{md:"24px" , xl:"26px"}
                         }}>{<Calendar  height={20} width={20}/>}</Icon>
                    </Grid>
                    <Grid xs={10} align="left">
                      <Typography
                        sx={{
                          fontFamily: "Heebo",
                          color: "#1E1E1E",
                          fontWeight: 500,
                          fontSize: {xl:"16px", lg:"14px" , md:"12px" , sm:"10px"}, 
                        }}
                      >
                        20 Jun 2023 - 22 Jul 2023
                      </Typography>
                      <Typography
                        marginTop={{
                          xl: "2px",
                          lg: "2px",
                          md: "2px",
                          sm: "2px",
                          xs: "2px",
                        }}
                        sx={{
                          fontFamily: "Heebo",
                          color: "#2B2B2B",
                          fontWeight: 400,
                          fontSize: {xl:"15px", lg:"13px" , md:"11px" , sm:"9px"}, 
                        }}
                      >
                        Duration
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={3} align="center">
                  <Grid container pl={{xl:10, lg:6.9, md:"39.5px"}}>
                    <Grid
                      xs={3}
                    >

                              <Icon  sx={{color:"#868686" ,
                          }}>{<Copy height={20} width={20} />}</Icon>

                    </Grid>
                    <Grid xs={9} align="left">
                      <Typography
                        sx={{
                          fontFamily: "Heebo",
                          color: "#1E1E1E",
                          fontWeight: 500,
                          fontSize: {xl:"16px", lg:"14px" , md:"12px" , sm:"10px"},
                        }}
                      >
                        200 of 200
                      </Typography>
                      <Typography
                        marginTop={{
                          xl: "2px",
                          lg: "2px",
                          md: "2px",
                          sm: "2px",
                          xs: "2px",
                        }}
                        sx={{
                          fontFamily: "Heebo",
                          color: "#2B2B2B",
                          fontWeight: 400,
                          fontSize: {xl:"15px", lg:"13px" , md:"11px" , sm:"9px"}, 
                        }}
                      >
                        No of credits
                      </Typography>
                    </Grid>
                  </Grid>

                  <Typography
                    sx={{
                      fontFamily: "Heebo",
                      color: "#2B2B2B",
                      fontWeight: 400,
                      fontSize: {xl:"15px", lg:"13px" , md:"11px" , sm:"9px"}, 
                    }}
                  ></Typography>
                </Grid>
                <Grid xs={2} align="center">
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      color: "#1E1E1E",
                      fontWeight: 600,
                      fontSize: {xl:"32px", lg:"28px" , md:"24px" , sm:"20px"}, 
                    }}
                  >
                    $20
                    <Box
                      component="span"
                      sx={{
                        fontFamily: "Heebo",
                        fontWeight: 400,
                        fontSize: {xl:"15px", lg:"13px" , md:"11px" , sm:"9px"}, 
                        color: "#2B2B2B",
                      }}
                    >
                      /Monthly
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AccordionSummary>
        </Box>
      
        <AccordionDetails
        sx={{padding:"0px !important" }} 
        >
          <Box sx={{borderBottom:"1px solid #D9D9D9"}} pb={2} pt={2} mx={4.3}>
                      <Grid >
            <Box>
            <Grid
             container  align="left" >
              <Grid xs={2}>   <Typography
                        sx={{
                          fontFamily: "Heebo",
                          color: "#1E1E1E",
                          fontWeight: 500,
                          fontSize: {xl:"16px", lg:"14px" , md:"12px" , sm:"10px"}, 
                        }}
                        >
                        Renuka Varsanni
                      </Typography></Grid>
              <Grid xs={2}>   
               <Typography
                        sx={{
                          fontFamily: "Heebo",
                          color: "rgba(43, 43, 43, 0.80)",
                          fontWeight: 400,
                          fontSize: {xl:"15px", lg:"13px" , md:"11px" , sm:"9px"}, 
                        }}
                        >
                        Renuka@gmail.com
                      </Typography></Grid>
              <Grid xs={8} 
               >
               <Chip label="Member" 
                sx={{
                  backgroundColor:" rgba(134, 134, 134, 0.40)",
                  color:"rgba(43, 43, 43, 0.80);",
                  fontFamily:"Heebo",
                  fontSize: {xl:"15px", lg:"13px" , md:"11px" , sm:"9px"}, 
                  width: {xl:"78px", lg:"78px" , md:"63px" , sm:"58px"}, 
                  height: {xl:"24px", lg:"25px" , md:"22px" , sm:"18px"},
                  fontWeight:400
                }} />
              </Grid>
            </Grid>
            </Box>
          </Grid>
          </Box>

        </AccordionDetails>
       
        <AccordionDetails sx={{padding:"0px !important" }} 
        >
          <Box 
          //sx={{borderBottom:"1px solid #D9D9D9"}} 
          pb={2} pt={2} mx={4.3}>
                      <Grid >
            <Box>
            <Grid
             container  align="left" >
              <Grid xs={2}>   <Typography
                        sx={{
                          fontFamily: "Heebo",
                          color: "#1E1E1E",
                          fontWeight: 500,
                          fontSize: {xl:"16px", lg:"14px" , md:"12px" , sm:"10px"}, 
                        }}
                        >
                        Renuka Varsanni
                      </Typography></Grid>
              <Grid xs={2}>   
               <Typography
                        sx={{
                          fontFamily: "Heebo",
                          color: "rgba(43, 43, 43, 0.80)",
                          fontWeight: 400,
                          fontSize: {xl:"15px", lg:"13px" , md:"11px" , sm:"9px"}, 
                        }}
                        >
                        Renuka@gmail.com
                      </Typography></Grid>
              <Grid xs={8} 
               >
               <Chip label="Member" 
                sx={{
                  backgroundColor:" rgba(134, 134, 134, 0.40)",
                  color:"rgba(43, 43, 43, 0.80);",
                  fontFamily:"Heebo",
                  fontSize: {xl:"15px", lg:"13px" , md:"11px" , sm:"9px"}, 
                  width: {xl:"75px", lg:"75px" , md:"63px" , sm:"58px"}, 
                  height: {xl:"24px", lg:"25px" , md:"22px" , sm:"18px"},
                  fontWeight:400
                }} />
              </Grid>
            </Grid>
            </Box>
          </Grid>
          </Box>

        </AccordionDetails>
      </Accordion>
      </Box>

      </Box>
      
      </Box>
      </Box>
      </ThemeProvider>
    </div>
  );
}
