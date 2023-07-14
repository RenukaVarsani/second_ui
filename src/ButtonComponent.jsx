import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import { FileText , CheckCircle } from "react-feather";
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";


const ResizableIcon = styled(FileText)`
  width: 1.2rem;
  height: 1.5rem;
  padding: 0.3rem;
  display: grid;
`;

const CheckCircleIcon = styled(CheckCircle)`
  width: 1.2rem;
  height: 1.5rem;
  padding: 0.3rem;  
  display: flex ;
`;


const ButtonComponent = ({isActive , handleClose, name }) => {
  return (
    <>
      <Button
        fullWidth
        variant="contained"
        startIcon={<ResizableIcon />}
        endIcon={<CheckCircleIcon /> }
        size="medium"
        className={isActive ? "active" : null}
        onClick={handleClose}
        sx={{
          backgroundColor: "#D3D3D3",
          fontSize: "1.5",
          marginLeft:"30px",
          fontWeight: "bolder",
          color: "black",
          height: "8vh",
          textTransform: "none",
          padding: "4px 30px",
          justifyContent: "start",
          ml: 1,
            ":hover": {
              bgcolor: "#D3D3D3",
              color: "black", 
            },
          
        }}
      >
        {name}
        <Grid> </Grid>
      </Button>
    </>
  );
};

export default ButtonComponent;
