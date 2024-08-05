import { Container, Fab } from "@mui/material";
import GmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Social() {
  return (
    <Container
      sx={{
        border: "1px, solid, gray",
        borderRadius: "10px",
        position: "fixed",
        left: -5,
        top: 350,
        width: "100px",
        display: "flex",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      <ul style={{ listStyle: "none", padding: "50px", gap: "100px" }}>
        <li>
          <Fab color="primary">
            <GmailIcon />
          </Fab>
        </li>
        <li>
          <Fab color="primary">
            <GitHubIcon />
          </Fab>
        </li>
      </ul>
    </Container>
  );
}
