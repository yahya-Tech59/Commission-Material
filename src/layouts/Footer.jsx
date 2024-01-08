import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        ml: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        p: 3,
        mb: 3,
        boxShadow: "0px 4px 6px rgba(156, 163, 175, 0.15)",
        display: {
          xs: { display: "flex", flexDirection: "column", overflow: "hidden" },
        },
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6">Privacy Policy</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6">Terms of use</Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
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
