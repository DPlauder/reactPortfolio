import { Container } from "@mui/material";
import Footer from "./Footer";

export default function Home() {
  return (
    <Container disableGutters maxWidth={false} sx={{ padding: 0 }}>
      <Footer />
    </Container>
  );
}
