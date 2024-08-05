import { Container } from "@mui/material";
import Info from "../parts/Info";
import ScrollLanguages from "../parts/ScollerLanguages";

export default function Home() {
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
      <Info />
      <ScrollLanguages />
    </Container>
  );
}
