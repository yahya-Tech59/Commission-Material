import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export const AlertCom = ({ severity }) => {
  return (
    <Stack sx={{ width: "40%" }} spacing={2}>
      <Alert
        severity={severity}
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          borderRadius: "0.5rem",
          backgroundColor: "#f8d7da", // Softer error background
          color: "#721c24",
          fontWeight: 600,
          pr: 40,
        }}
      >
        Error
      </Alert>
    </Stack>
  );
};
