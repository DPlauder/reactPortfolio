import { Outlet, NavLink, Link } from "react-router-dom";

import { Container, Typography, Grid, Button } from "@mui/material";

export default function RootElement() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ padding: "0px", height: "100%" }}
    >
      <Grid
        container
        spacing={2}
        padding={2}
        position={"sticky"}
        borderBottom={1}
        borderColor={"red"}
      >
        <Grid item xs={4}>
          {" "}
          <Typography variant="h4" color={"white"}>
            Dominik Plauder
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <NavLink to="/">
            <Button>
              <Typography color={"white"}>Home</Typography>
            </Button>
          </NavLink>
        </Grid>
        <Grid item xs={2}>
          <NavLink to="/about">
            <Button>
              <Typography color={"white"}> About Me</Typography>
            </Button>
          </NavLink>
        </Grid>
        <Grid item xs={2}>
          <Link to="/projects">
            <Button>
              <Typography color={"white"}>My Projects</Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
      <div id="content" style={{ background: "#262626" }}>
        {<Outlet />}
      </div>
    </Container>
  );
}
