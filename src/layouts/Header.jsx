import React from "react";
import { HiMiniUserCircle } from "react-icons/hi2";
import { GoHomeFill } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Box, Button, Icon, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      backgroundColor="white"
      boxShadow="0px 4px 6px rgba(156, 163, 175, 0.15)"
      width={{ md: "99rem", sm: "43.4rem" }}
      mt={1}
      py={1}
    >
      <Box display="flex" alignItems="center">
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

        <Box
          sx={{
            border: 0.5,
            borderColor: "#D9D9D9",
            height: 36,
            ml: 2,
            mt: 1,
          }}
        />

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
      </Box>

      <Box
        display="flex"
        gap={2}
        alignItems="center"
        pr={2}
        position={{ sm: "absolute" }}
        right={{ sm: "1rem" }}
        px={{ sm: 2 }}
        mt={{ sm: 1 }}
      >
        <Typography variant="h2" fontSize={18}>
          EN
        </Typography>

        <Icon sx={{ fontSize: 25 }}>
          <IoMdNotificationsOutline />
        </Icon>

        <Box border={0.5} borderColor="#D9D9D9" height={36} ml={1} />

        <Typography variant="h2" fontSize="1rem">
          Jama Abdi
        </Typography>

        <Icon
          sx={{
            color: "primary.main",
            fontSize: "2rem",
          }}
        >
          <HiMiniUserCircle />
        </Icon>
      </Box>
    </Box>
  );
};
