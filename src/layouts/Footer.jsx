import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        ml: 1,
        width: "96rem",
        height: "1.8rem",
        display: "flex",
        gap: 3,
        p: 3,
        mb: 3,
        boxShadow: "0px 4px 6px rgba(156, 163, 175, 0.15)",
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
