import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Button from "@mui/material/Button";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { config } from "../../config";

export default function LandingPage(): React.ReactElement {
  return (
    <>
      <Typography gutterBottom sx={{ marginTop: 2 }} variant="h4">
        Welcome to {config.APP.NAME}!
      </Typography>

      <Typography gutterBottom color="textSecondary">
        This is a project for exploring and visualizing the datasets in{" "}
        <MuiLink href={config.SCB_OPENDATA.URL}>SCB Opendata</MuiLink>.
      </Typography>

      <Button
        component={RouterLink}
        sx={{ marginTop: 1 }}
        to="/metadata"
        variant="contained"
      >
        View datasets
      </Button>
    </>
  );
}
