import { Container, Grid } from "@mui/material";

export default function Projects() {
  return (
    <Container
      disableGutters
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        gap: "100px",
        height: "calc(100vh - 200px)",
      }}
    >
      <Grid>
        <h1>Projects</h1>
      </Grid>
    </Container>
  );
}
