import React from "react";
import { HiMiniUserCircle } from "react-icons/hi2";
import { GoHomeFill } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Box, Button, Icon, ListItemText, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "white",
        mt: 1,
        mr: 2,
        width: "100rem",
        height: "4.75rem",
      }}
    >
      <Button
        sx={{
          display: "flex",
          ml: 3,
          ":hover": {
            borderBottom: "1px solid #3A57E8",
          },
        }}
      >
        <Icon sx={{ fontSize: 26, mb: 1, width: "2.2rem", height: "2rem" }}>
          <GoHomeFill />
        </Icon>
        <ListItemText primary="Home" />
      </Button>
      <Box
        sx={{
          border: 0.5,
          borderColor: "#D9D9D9",
          height: 36,
          mt: 2,
          ml: 6,
        }}
      />
      <Button
        sx={{
          display: "flex",
          ml: 3,
          ":hover": {
            borderBottom: "1px solid #3A57E8",
          },
        }}
      >
        <Icon sx={{ fontSize: 26, mb: 2 }}>
          <GoHomeFill />
        </Icon>

        <ListItemText primary="Paid" />
      </Button>
      <Box
        sx={{
          border: 0.5,
          borderColor: "#D9D9D9",
          height: 36,
          mt: 2,
          ml: 6,
        }}
      />
      <Box
        sx={{
          display: "flex",
          gap: 2,
          marginLeft: "42rem",
          paddingLeft: "20rem",
        }}
      >
        <Typography variant="h2" sx={{ mt: 3.4, mr: 1, fontSize: 18 }}>
          EN
        </Typography>
        <Icon sx={{ mt: 3, fontSize: 25 }}>
          <IoMdNotificationsOutline />
        </Icon>
        <Box
          sx={{
            border: 0.5,
            borderColor: "#D9D9D9",
            height: 36,
            mt: 2,
            ml: 1,
          }}
        />
        <Typography variant="h2" sx={{ mt: 3.8, fontSize: "1rem" }}>
          Jama Abdi
        </Typography>
        <Icon
          sx={{ ml: "auto", mt: 3, color: "primary.main", fontSize: "2rem" }}
        >
          <HiMiniUserCircle />
        </Icon>
      </Box>
    </Box>
  );
};
