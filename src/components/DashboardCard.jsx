import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export const DashboardCard = ({ title, subtitle, value, tableName }) => (
  <Box
    sx={{
      height: 150,
      width: "22.2rem",
      backgroundColor: "white",
      boxShadow: "0px 4px 6px rgba(156, 163, 175, 0.15)",
      borderRadius: "1rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    }}
  >
    <Typography variant="h6" sx={{ mt: 2, ml: 3 }}>
      {title}
    </Typography>
    <Typography
      variant="h5"
      color="primary"
      sx={{
        position: "relative",
        bottom: 14,
        left: 290,
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
    <Box sx={{ position: "relative", bottom: 42, right: 16 }}>
      <Typography variant="h4" sx={{ fontWeight: 500, ml: 5, mt: 5 }}>
        {value}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1, ml: 5, color: "#8A92A6" }}>
        {tableName}
      </Typography>
    </Box>
  </Box>
);
