import { Button } from "@mui/material";
import React from "react";

const ClearButton = ({ label, onClick }) => (
  <Button
    type="button"
    onClick={onClick}
    sx={{
      p: 3,
      px: 7,
      borderRadius: 4,
      width: 28,
      height: 12,
      bgcolor: "#C03221",
      "&:hover": {
        bgcolor: "#df5646",
      },
      color: "white",
    }}
  >
    {label}
  </Button>
);

export default ClearButton;
