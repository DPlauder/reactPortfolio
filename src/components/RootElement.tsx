import { Outlet, NavLink, Link } from "react-router-dom";

import { Container, Typography, Grid, Button } from "@mui/material";

export default function RootElement() {
  return (
    <Container disableGutters maxWidth={false} sx={{ padding: "0px" }}>
      <Grid container spacing={2} padding={2} position={"sticky"}>
        <Grid item xs={6}>
          {" "}
          <Typography variant="h4">Dominik Plauder</Typography>
          <Typography>Web Developer</Typography>
        </Grid>
        <Grid item xs={2}>
          <NavLink to="/">
            <Button>
              <Typography>Home</Typography>
            </Button>
          </NavLink>
        </Grid>
        <Grid item xs={2}>
          <Link to="/projects">
            <Button>
              <Typography>My Projects</Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <NavLink to="/about">
            <Button>
              <Typography>About Me</Typography>
            </Button>
          </NavLink>
        </Grid>
      </Grid>
      <div id="content">{<Outlet />}</div>
    </Container>
  );
}
