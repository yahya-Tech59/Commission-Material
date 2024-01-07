import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const SidebarHeader = ({ onClose }) => {
  return (
    <Box onClick={onClose}>
      <IconButton
        onClick={onClose}
        sx={{
          color: "#0048B2",
          ml: "15rem",
          position: "relative",
          top: 35,
        }}
      >
        <BsFillArrowLeftCircleFill />
      </IconButton>
      <Typography
        variant="h5"
        text="3xl"
        position="relative"
        top={4}
        ml={3}
        fontFamily="Inter"
        fontWeight={600}
      >
        Commission System
      </Typography>
    </Box>
  );
};

export default SidebarHeader;
