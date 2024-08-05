import { Outlet, NavLink, Link } from "react-router-dom";
import { Container, Typography, Grid, Button, Box } from "@mui/material";
import Social from "../components/parts/Social";
import Footer from "../components/parts/Footer";

export default function RootElement() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "0px",
        height: "100vh",
        backgroundColor: "#262626",
      }}
    >
      <Grid
        container
        spacing={2}
        padding={2}
        position={"sticky"}
        borderBottom={1}
        borderColor={"red"}
        alignItems="center"
        height={"100px"}
      >
        <Grid item xs={4}>
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
              <Typography color={"white"}>About Me</Typography>
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
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
          }}
        >
          <Social />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "800px",
              textAlign: "center",
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Container>
  );
}
