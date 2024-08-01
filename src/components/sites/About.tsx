import { Container, Card, CardContent, Typography } from "@mui/material";

export default function About() {
  return (
    <Container>
      <Card sx={{ minWidth: 275, background: "white" }}>
        <CardContent>
          <Typography variant="h4">Hi. I'm Dominik,</Typography>
          <Typography variant="h4">
            nice to meet you. Please take a look around.
          </Typography>
          <Typography>
            I am a dedicated application developer with a passion for creating
            efficient and user-friendly software solutions. With my sales
            background i specialice in building robust applications that meet
            clients needs.
          </Typography>
          <Typography>
            I thrive on solving complex problems and continuously strive to stay
            updated with the latest industry trends and technologies. My goal is
            to deliver high-quality, scalable applications that provide value
            and enhance user experiences.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
