import React from "react";
import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      display="flex"
      bgcolor="white"
      ml={{ md: 1, sm: -6 }}
      width={{ md: "97rem", sm: "44rem" }}
      p={{ md: 2.5, sm: 1 }}
      mb={3}
      boxShadow="0px 4px 6px rgba(156, 163, 175, 0.15)"
    >
      <Box display="flex" gap={{ md: 2, sm: 3 }} px={{ md: 3, sm: 2 }}>
        <Typography variant="h6">Privacy Policy</Typography>

        <Typography variant="h6" sx={{ ml: { sm: 5 } }}>
          Terms of use
        </Typography>
      </Box>

      <Typography variant="h6" ml={{ md: "54rem", sm: "10rem" }}>
        @ 2022 CawaaleICT
      </Typography>
    </Box>
  );
};
