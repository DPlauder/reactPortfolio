import { Container } from "@mui/material";
import Info from "../parts/Info";
import SwiperLanguages from "../parts/SwiperLanguages";
import ScrollLanguages from "../parts/ScollerLanguages";

export default function Home() {
  return (
    <Container disableGutters maxWidth="sm" sx={{ padding: 0 }}>
      <Info />
      <SwiperLanguages />
      <ScrollLanguages />
    </Container>
  );
}
