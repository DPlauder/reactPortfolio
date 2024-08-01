import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#262626",
        color: "white",
        textAlign: "center",
        padding: 2,
      }}
    >
      <Typography variant="body2">
        © 2024 Dominik Plauder. All rights reserved.
      </Typography>
    </Box>
  );
}
