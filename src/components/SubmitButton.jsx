import { Button } from "@mui/material";
import React from "react";

const SubmitButton = ({ label, onClick }) => (
  <Button
    type="submit"
    onClick={onClick}
    sx={{
      p: 3,
      px: 7,
      borderRadius: 4,
      width: 28,
      height: 12,
      bgcolor: "#3A57E8",
      "&:hover": {
        bgcolor: "#647ae6",
      },
      color: "white",
    }}
  >
    {label}
  </Button>
);

export default SubmitButton;
