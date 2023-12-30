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
        gap: 3,
        p: 3,
        mb: 2,
      }}
    >
      <Typography variant="h6">Privacy Policy</Typography>
      <Typography variant="h6">Terms of use</Typography>

      <Typography variant="h6" sx={{ ml: "66rem" }}>
        @ 2022 CawaaleICT
      </Typography>
    </Box>
  );
};