import { Box, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        ml: 1,
        width: "96rem",
        display: "flex",
        gap: 5,
        p: 3,
        mb: 2,
      }}
    >
      <Typography variant="h5">Privacy Policy</Typography>
      <Typography variant="h5">Terms of use</Typography>

      <Typography variant="h5" sx={{ ml: "55rem" }}>
        @ 2023 CawaaleICT
      </Typography>
    </Box>
  );
};
