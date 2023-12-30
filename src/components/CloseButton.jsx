import { Button, Typography } from "@mui/material";
import React from "react";

const CloseButton = ({ onClick }) => (
  <Button
    onClick={onClick}
    sx={{
      p: 3,
      px: 6,
      borderRadius: 4,
      width: 24,
      height: 12,
      bgcolor: "#3A57E8",
      "&:hover": {
        bgcolor: "#647ae6",
      },
      color: "white",
    }}
  >
    {/* <Typography variant="h6"></Typography> */}
    Close
  </Button>
);

export default CloseButton;
