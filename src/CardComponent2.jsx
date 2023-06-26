import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { CheckCircle, FileText } from "react-feather";
import ButtonComponent from "./ButtonComponent";
import { Button } from "@mui/material";

const ResizableIcon = styled(FileText)`
  width: 1.2rem;
  height: 1.5rem;
  padding: 0.3rem;
  display: grid;
`;

export default function ResponsiveGrid({ isActive, handleClose }) {
  const [selectedButtons, setSelectedButtons] = React.useState([]);
  return (
    <Box
      sx={{
        flexGrow: 1,
        border: "1px solid #D3D3D3",
        overflow: "auto",
        maxHeight: "auto",
      }}
      pl={2}
      pr={3}
    >
      <Typography
        gutterBottom
        component="p"
        color="textSecondary"
        sx={{ ml: 1, mt: 2, fontSize: "small" }}
      >
        Accounts Payable
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md:12 }}
        mb={3}
      >
        <Grid xs={2} sm={4} md={3}>
          <ButtonComponent
            isActive={isActive}
            handleClose={handleClose}
            name={"Invoices"}
          />
        </Grid>
        <Grid xs={2} sm={4} md={3}>
          <ButtonComponent
          
            isActive={isActive}
            handleClose={handleClose}
            name={"Receipts"}
          />
        </Grid>
        <Grid xs={2} sm={4} md={3}>
          <ButtonComponent
            isActive={isActive}
            handleClose={handleClose}
            name={" Transaction Bill"}
          />
        </Grid>
        <Grid xs={2} sm={4} md={3}>
          <ButtonComponent
            isActive={isActive}
            handleClose={handleClose}
            name={"Transaction Invoices"}
          />
        </Grid>
      </Grid>
      <Typography
        gutterBottom
        component="p"
        color="textSecondary"
        sx={{ ml: 1, mt: 2, fontSize: "small" }}
      >
        Recruitment
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        mb={3}
      >
        <Grid xs={2} sm={4} md={3}>
          <ButtonComponent
            isActive={isActive}
            handleClose={handleClose}
            name={"   Resume"}
          />
        </Grid>
        <Grid xs={2} sm={4} md={3}>
          <ButtonComponent
            isActive={isActive}
            handleClose={handleClose}
            name={"Resume List"}
          />
        </Grid>
        <Grid xs={2} sm={4} md={3}>
          <ButtonComponent
            isActive={isActive}
            handleClose={handleClose}
            name={" Technical Resume"}
          />
        </Grid>
        <Grid xs={2} sm={4} md={3}>
          <ButtonComponent
            isActive={isActive}
            handleClose={handleClose}
            name={"Practical Resume"}
          />
        </Grid>
      </Grid>
      <Typography
        gutterBottom
        component="p"
        color="textSecondary"
        sx={{ ml: 1, mt: 2, fontSize: "small" }}
      >
        Employee Identification
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid xs={2} sm={4} md={3}>
          <ButtonComponent
            isActive={isActive}
            handleClose={handleClose}
            name={"Aadharcard"}
          />
        </Grid>
        <Grid xs={2} sm={4} md={3}>
          <ButtonComponent
            isActive={isActive}
            handleClose={handleClose}
            name={"Pancard"}
          />
        </Grid>
        <Grid xs={2} sm={4} md={3}>
          <ButtonComponent
            isActive={isActive}
            handleClose={handleClose}
            name={"Marksheet"}
          />
        </Grid>
        <Grid xs={2} sm={4} md={3}>
          <ButtonComponent
            isActive={isActive}
            handleClose={handleClose}
            name={"Certificate"}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
