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
        minHeight: "100vh",
        backgroundColor: "#262626",
      }}
    >
      {/* Header with Navigation */}
      <Grid
        container
        spacing={2}
        padding={2}
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          borderBottom: "1px solid red",
          backgroundColor: "#333",
          boxShadow: "0px 4px 10px rgba(255, 0, 0, 0.3)",
          alignItems: "center",
          height: "100px",
        }}
      >
        <Grid item xs={4}>
          <Typography variant="h3" color={"white"} sx={{ fontWeight: "bold" }}>
            Dominik Plauder
          </Typography>
        </Grid>
        <Grid
          item
          xs={8}
          pr={"100px"}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Button>
              <Typography variant="h5" color={"white"}>
                Home
              </Typography>
            </Button>
          </NavLink>
          <NavLink to="/about" style={{ textDecoration: "none" }}>
            <Button>
              <Typography variant="h5" color={"white"}>
                About Me
              </Typography>
            </Button>
          </NavLink>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <Button>
              <Typography variant="h5" color={"white"}>
                My Projects
              </Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>

      {/* Main Content with Social Links and Outlet */}
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            paddingTop: "20px",
            paddingLeft: "20px",
          }}
        >
          <Social />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Outlet />
        </Box>
      </Box>

      {/* Footer */}
      <Box>
        <Footer />
      </Box>
    </Container>
  );
}
