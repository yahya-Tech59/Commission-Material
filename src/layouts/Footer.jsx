import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      display="flex"
      bgcolor="white"
      ml={1}
      width="100%"
      flexDirection="column"
      p={3}
      mb={3}
      boxShadow="0px 4px 6px rgba(156, 163, 175, 0.15)"
      sx={{
        display: { xs: "flex" },
        flexDirection: { xs: "column" },
        overflow: { xs: "hidden" },
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={2} sm={2} md={2}>
          <Typography variant="h6">Privacy Policy</Typography>
        </Grid>
        <Grid item xs={7} sm={5} md={2}>
          <Typography
            variant="h6"
            sx={{ ml: -62, display: { sm: { mr: 40 } } }}
          >
            Terms of use
          </Typography>
        </Grid>

        <Grid item xs={4} sm={6} md={2}>
          <Typography
            variant="h6"
            sx={{
              display: { xs: { position: "relative", right: 800 } },
            }}
          >
            @ 2022 CawaaleICT
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
