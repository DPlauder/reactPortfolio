import { Outlet } from "react-router-dom";

import { Container, Typography, Grid, Button, Fab } from "@mui/material";

export default function RootElement() {
  return (
    <Container>
      <div id="content">{<Outlet />}</div>
    </Container>
  );
}
