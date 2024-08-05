import { Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Container
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",

        backgroundColor: "#262626",
        color: "white",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
          width: "100%",
          height: "100px",
          border: "1px, solid, red",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <Typography variant="body1" color={"white"}>
          © 2024 Dominik Plauder. All rights reserved.
        </Typography>
      </Container>
    </Container>
  );
}
