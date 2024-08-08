import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import "../css/About.css";

export default function About() {
  return (
    <Container
      disableGutters
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
        gap: "40px",
        minHeight: "calc(100vh - 200px)",
        color: "white",
      }}
    >
      <Card
        className="pulsating-card"
        sx={{
          minWidth: 275,
          maxWidth: 1200,
          backgroundColor: "#333",
          boxShadow: "0px 4px 20px rgba(255, 0, 0, 0.5)",
          borderRadius: "12px",
          color: "white",
        }}
      >
        <CardContent
          sx={{
            padding: 6,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{ marginBottom: "20px", fontWeight: "bold" }}
          >
            Hi, I'm <span style={{ color: "red", fontSize: "1.5em" }}>D</span>
            OMINIK
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: "24px" }}>
            Nice to meet you. Please take a look around.
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: "16px" }}>
            I am a dedicated application developer with a passion for creating
            efficient and user-friendly software solutions. With my sales
            background, I specialize in building robust applications that meet
            clients' needs.
          </Typography>
          <Typography variant="h5">
            I thrive on solving complex problems and continuously strive to stay
            updated with the latest industry trends and technologies. My goal is
            to deliver high-quality, scalable applications that provide value
            and enhance user experiences.
          </Typography>
        </CardContent>
      </Card>
      <Grid container mt={"10%"}>
        <Grid xs={4} sx={{ borderBottom: "1px solid orange" }}>
          <Box>
            <Typography variant="h3">
              <span style={{ color: "orange", fontSize: "1.3em" }}>D</span>esign
            </Typography>
          </Box>
        </Grid>
        <Grid xs={4} sx={{ borderTop: "1px solid violet" }}>
          <Typography variant="h3">
            <span style={{ color: "violet", fontSize: "1.3em" }}>D</span>
            evelopment
          </Typography>
        </Grid>
        <Grid xs={4} sx={{ borderBottom: "1px solid green" }}>
          <Typography variant="h3">
            <span style={{ color: "green", fontSize: "1.3em" }}>F</span>ull
            Stack
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
