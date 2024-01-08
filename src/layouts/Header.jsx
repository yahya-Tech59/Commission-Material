import React from "react";
import { HiMiniUserCircle } from "react-icons/hi2";
import { GoHomeFill } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  Box,
  Button,
  Grid,
  Hidden,
  Icon,
  Toolbar,
  Typography,
} from "@mui/material";

export const Header = () => {
  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        boxShadow: "0px 4px 6px rgba(156, 163, 175, 0.15)",
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Button
            sx={{
              display: "flex",
              ":hover": {
                borderBottom: { xs: "1px solid #3A57E8", md: "none" },
              },
            }}
          >
            <Icon sx={{ fontSize: 26, mb: 1, width: "2.2rem", height: "2rem" }}>
              <GoHomeFill />
            </Icon>
            <Typography variant="body1">Home</Typography>
          </Button>
        </Grid>

        <Grid item>
          <Box
            sx={{
              border: 0.5,
              borderColor: "#D9D9D9",
              height: 36,
              ml: 2,
            }}
          />
        </Grid>

        <Grid item>
          <Button
            sx={{
              display: "flex",
              ":hover": {
                borderBottom: { xs: "1px solid #3A57E8", md: "none" },
              },
            }}
          >
            <Icon sx={{ fontSize: 26, mb: 1, width: "2.2rem", height: "2rem" }}>
              <GoHomeFill />
            </Icon>
            <Typography variant="body1">Paid</Typography>
          </Button>
        </Grid>
      </Grid>

      <Grid container alignItems="center" spacing={2} ml={125}>
        <Grid item>
          <Typography variant="h2" fontSize={18}>
            EN
          </Typography>
        </Grid>

        <Grid item>
          <Icon sx={{ fontSize: 25 }}>
            <IoMdNotificationsOutline />
          </Icon>
        </Grid>

        <Grid item>
          <Box border={0.5} borderColor="#D9D9D9" height={36} ml={1} />
        </Grid>

        <Grid item>
          <Typography variant="h2" fontSize="1rem">
            Jama Abdi
          </Typography>
        </Grid>

        <Grid item xs={12} sm="auto">
          <Icon
            sx={{
              ml: "auto",
              color: "primary.main",
              fontSize: "2rem",
            }}
          >
            <HiMiniUserCircle />
          </Icon>
        </Grid>
      </Grid>
    </Toolbar>
  );
};
