import { Container } from "@mui/material";
import Info from "../parts/Info";
import Footer from "../parts/Footer";
import SwiperLanguages from "../parts/SwiperLanguages";

export default function Home() {
  return (
    <Container disableGutters maxWidth="sm" sx={{ padding: 0 }}>
      <Info />
      <SwiperLanguages />
      <Footer />
    </Container>
  );
}
