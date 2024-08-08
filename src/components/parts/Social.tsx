import { Container, Fab, Box } from "@mui/material";
import GmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Social() {
  return (
    <Container
      sx={{
        position: "fixed",
        left: 10,
        top: 350,
        width: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        backgroundColor: "#333",
        boxShadow: "0px 4px 20px rgba(255, 0, 0, 0.5)",
        borderRadius: "12px",
        padding: "16px",
        color: "white",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Fab
          color="primary"
          sx={{
            backgroundColor: "red",
            "&:hover": { backgroundColor: "darkred" },
          }}
        >
          <a
            href="mailto:dominik.plauder@gmail.com"
            style={{
              textDecoration: "none",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <GmailIcon />
          </a>
        </Fab>
        <Fab
          color="primary"
          sx={{
            backgroundColor: "#333",
            "&:hover": { backgroundColor: "gray" },
          }}
        >
          <a
            href="https://github.com/DPlauder"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <GitHubIcon />
          </a>
        </Fab>
      </Box>
    </Container>
  );
}
