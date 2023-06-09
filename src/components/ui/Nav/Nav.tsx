import React from "react";
import { Outlet, Link as RouterLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";

import { config } from "../../../config";
import Drawer from "../Drawer";

export interface NavProps {
  nav?: React.ReactNode;
}

export default function Nav({ nav }: NavProps): React.ReactElement {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        color="primary"
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <MuiLink
            color="rgb(255,255,255)"
            component={RouterLink}
            to="/"
            underline="hover"
            variant="h6"
          >
            {config.APP.NAME}
          </MuiLink>
        </Toolbar>
      </AppBar>

      {nav && <Drawer> {nav}</Drawer>}

      <Box
        component="main"
        sx={{ flexGrow: 1, padding: 3, paddingRight: 3, paddingTop: 1 }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
