import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import Link from "@mui/material/Link";

export default function Projects() {
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
      <Grid>
        <h1>Projects</h1>
        <Card>
          <CardMedia />
          <CardContent>
            <Typography variant="h5">Title</Typography>
            <Typography variant="body2">Description</Typography>
          </CardContent>
          <CardActions>
            <Link href="#" target="_blank" rel="noopener">
              <Button size="small" color="primary">
                View on GitHub
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
}
