import { Container, Typography } from "@mui/material";

export default function Info() {
  return (
    <Container sx={{ color: "white" }}>
      <Typography variant="h1" align="center">
        DOMINIK
      </Typography>
      <Typography variant="h1" align="center">
        PLAUDER
      </Typography>
      <Typography variant="h3" align="center">
        FULL STACK
      </Typography>
      <Typography variant="h3" align="center">
        DEVELOPER
      </Typography>
      <Typography align="center" mt={"10px"}>
        With a focus on <span style={{ color: "orange" }}>REACT</span>,{" "}
        <span style={{ color: "violet" }}>.NET</span> and{" "}
        <span style={{ color: "green" }}>PHP</span>
      </Typography>
    </Container>
  );
}
