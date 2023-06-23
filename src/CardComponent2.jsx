import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { FileText } from "react-feather";
import ButtonComponent from "./ButtonComponent";
import { Button } from "@mui/material";

const ResizableIcon = styled(FileText)`
  width: 1.2rem;
  height: 1.5rem;
  padding: 0.3rem;
  display: grid;
`;

export default function ResponsiveGrid({ isActive, handleClose }) {
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
        columns={{ xs: 4, sm: 8, md: 12 }}
        mb={3}
      >
        <Grid xs={2} sm={4} md={3}>
          {/* <Button
            fullWidth
            variant="contained"
            // variant="contained"
            startIcon={<ResizableIcon />}
            size="small"
            className={isActive ? 'active' : null}
            onClick={handleClose}
            sx={{
              backgroundColor: "#D3D3D3",
              fontSize: "1.5",
              fontWeight: "bolder",
              color:"black",
              height: "8vh",
              textTransform: "none",
              padding: "4px 30px",
              justifyContent: "start",
              ml: 1,
              ":hover": {
                bgcolor: "#9F77EB",
                color: "white",
              },
            }}
          >
            Invoices
            <Grid> </Grid>
          </Button> */}
          <ButtonComponent
            isActive={isActive}
            handleClose={handleClose}
            name={"Invoices"}
          />
        </Grid>
        <Grid xs={2} sm={4} md={3}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<ResizableIcon />}
            size="small"
            sx={{
              backgroundColor: "#D3D3D3",
              fontSize: "1.5",
              fontWeight: "bolder",
              color: "black",
              height: "8vh",
              textTransform: "none",
              padding: "4px 30px",
              justifyContent: "start",
              ml: 1,
              ":hover": {
                bgcolor: "#9F77EB",
                color: "white",
              },
            }}
          >
            Receipts
          </Button>
        </Grid>
        <Grid xs={2} sm={4} md={3}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<ResizableIcon />}
            size="small"
            sx={{
              backgroundColor: "#D3D3D3",
              fontSize: "1.5",
              fontWeight: "bolder",
              color: "black",
              height: "8vh",
              textTransform: "none",
              padding: "4px 30px",
              justifyContent: "start",
              ml: 1,
              ":hover": {
                bgcolor: "#9F77EB",
                color: "white",
              },
            }}
          >
            Transaction Bill
          </Button>
        </Grid>
        <Grid xs={2} sm={4} md={3}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<ResizableIcon />}
            size="small"
            sx={{
              backgroundColor: "#D3D3D3",
              fontSize: "1.5",
              fontWeight: "bolder",
              color: "black",
              height: "8vh",
              textTransform: "none",
              padding: "4px 30px",
              justifyContent: "start",
              ml: 1,
              ":hover": {
                bgcolor: "#9F77EB",
                color: "white",
              },
            }}
          >
            Transaction Invoices
          </Button>
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
          <Button
            fullWidth
            variant="contained"
            startIcon={<ResizableIcon />}
            size="small"
            sx={{
              backgroundColor: "#D3D3D3",
              fontSize: "1.5",
              fontWeight: "bolder",
              color: "black",
              height: "8vh",
              textTransform: "none",
              padding: "4px 30px",
              justifyContent: "start",
              ml: 1,
              ":hover": {
                bgcolor: "#9F77EB",
                color: "white",
              },
            }}
          >
            Resume
          </Button>
        </Grid>
        <Grid xs={2} sm={4} md={3}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<ResizableIcon />}
            size="small"
            sx={{
              backgroundColor: "#D3D3D3",
              fontSize: "1.5",
              fontWeight: "bolder",
              color: "black",
              height: "8vh",
              textTransform: "none",
              padding: "4px 30px",
              justifyContent: "start",
              ml: 1,
              ":hover": {
                bgcolor: "#9F77EB",
                color: "white",
              },
            }}
          >
            Resume List
          </Button>
        </Grid>
        <Grid xs={2} sm={4} md={3}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<ResizableIcon />}
            size="small"
            sx={{
              backgroundColor: "#D3D3D3",
              fontSize: "1.5",
              fontWeight: "bolder",
              color: "black",
              height: "8vh",
              textTransform: "none",
              padding: "4px 30px",
              justifyContent: "start",
              ml: 1,
              ":hover": {
                bgcolor: "#9F77EB",
                color: "white",
              },
            }}
          >
            Technical Resume
          </Button>
        </Grid>
        <Grid xs={2} sm={4} md={3}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<ResizableIcon />}
            size="small"
            sx={{
              backgroundColor: "#D3D3D3",
              fontSize: "1.5",
              fontWeight: "bolder",
              color: "black",
              height: "8vh",
              textTransform: "none",
              padding: "4px 30px",
              justifyContent: "start",
              ml: 1,
              ":hover": {
                bgcolor: "#9F77EB",
                color: "white",
              },
            }}
          >
            Practical Resume
          </Button>
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
          <Button
            fullWidth
            variant="contained"
            startIcon={<ResizableIcon />}
            size="small"
            sx={{
              backgroundColor: "#D3D3D3",
              fontSize: "1.5",
              fontWeight: "bolder",
              color: "black",
              height: "8vh",
              textTransform: "none",
              padding: "4px 30px",
              justifyContent: "start",
              ml: 1,
              ":hover": {
                bgcolor: "#9F77EB",
                color: "white",
              },
            }}
          >
            Aadharcard
          </Button>
        </Grid>
        <Grid xs={2} sm={4} md={3}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<ResizableIcon />}
            size="small"
            sx={{
              backgroundColor: "#D3D3D3",
              fontSize: "1.5",
              fontWeight: "bold",
              color: "black",
              height: "8vh",
              textTransform: "none",
              padding: "4px 30px",
              justifyContent: "start",
              ml: 1,
              ":hover": {
                bgcolor: "#9F77EB",
                color: "white",
              },
            }}
            D3D3D3
          >
            Pancard
          </Button>
        </Grid>
        <Grid xs={2} sm={4} md={3}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<ResizableIcon />}
            size="small"
            sx={{
              backgroundColor: "#D3D3D3",
              fontSize: "1.5",
              fontWeight: "bold",
              color: "black",
              height: "8vh",
              textTransform: "none",
              padding: "4px 30px",
              justifyContent: "start",
              ml: 1,
              ":hover": {
                bgcolor: "#9F77EB",
                color: "white",
              },
            }}
          >
            Marksheet
          </Button>
        </Grid>
        <Grid xs={2} sm={4} md={3}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<ResizableIcon />}
            size="small"
            sx={{
              backgroundColor: "#D3D3D3",
              fontSize: "1.5",
              fontWeight: "bold",
              color: "black",
              height: "8vh",
              textTransform: "none",
              padding: "4px 30px",
              justifyContent: "start",
              ml: 1,
              ":hover": {
                bgcolor: "#9F77EB",
                color: "white",
              },
            }}
          >
            Certificate
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
