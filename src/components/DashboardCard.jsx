import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export const DashboardCard = ({ title, subtitle, value, tableName }) => (
  <Grid
    item
    xs={2.8}
    md={2.8}
    lg={2.6}
    sx={{
      height: 158,
      width: "12rem",
      backgroundColor: "white",
      boxShadow: "0px 4px 6px rgba(156, 163, 175, 0.15)",
      borderRadius: "1rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    }}
  >
    <Typography variant="h6" sx={{ position: "relative", bottom: 12 }}>
      {title}
    </Typography>
    <Typography
      variant="h5"
      color="primary"
      sx={{
        position: "relative",
        bottom: 36,
        left: 260,
        bgcolor: "#EBEEFD",
        color: "#3A57E8",
        borderRadius: "1rem",
        fontFamily: "inter",
        fontSize: "1rem",
        p: 0,
      }}
    >
      {subtitle}
    </Typography>
    <Box sx={{ position: "relative", bottom: 48, right: 48 }}>
      <Typography variant="h4" sx={{ fontWeight: 500, ml: 5, mt: 5 }}>
        {value}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1, ml: 5, color: "#8A92A6" }}>
        {tableName}
      </Typography>
    </Box>
  </Grid>
);
