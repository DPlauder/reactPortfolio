import { Container, Typography, Box } from "@mui/material";

export default function Footer() {
  return (
    <Container
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        backgroundColor: "#333",
        color: "white",
        boxShadow: "0px -4px 20px rgba(255, 0, 0, 0.5)",
        padding: "20px 0",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <Box>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              gap: "20px",
              fontWeight: "bold",
            }}
          >
            <li style={{ cursor: "pointer" }}>Home</li>
            <li style={{ cursor: "pointer" }}>About Me</li>
            <li style={{ cursor: "pointer" }}>Projects</li>
          </ul>
        </Box>
        <Typography variant="body1" color="white" sx={{ fontSize: "14px" }}>
          © 2024 Dominik Plauder. All rights reserved.
        </Typography>
      </Container>
    </Container>
  );
}
