import { Container, Fab } from "@mui/material";

export default function Social() {
  return (
    <Container>
      <ul style={{ listStyle: "none", padding: "0px" }}>
        <li>
          <Fab color="primary">Gmail</Fab>
        </li>
        <li></li>
        <Fab color="primary">Github</Fab>
        <li>
          <Fab color="primary">LinkedIn</Fab>
        </li>
      </ul>
    </Container>
  );
}
