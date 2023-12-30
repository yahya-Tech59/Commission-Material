import { Box, Icon, Input, TextField } from "@mui/material";
import React from "react";
import { CiSearch } from "react-icons/ci";

export const Search = ({ label, variant, size, value, onChange }) => {
  return (
    <Box sx={{ mt: "-2rem" }}>
      <Icon sx={{ ml: "91rem", fontSize: 28, position: "relative", top: 6 }}>
        <CiSearch className="ml-[91rem] relative top-6 text-2xl" />
      </Icon>
      <TextField
        label={label}
        variant={variant}
        size={size}
        value={value}
        onChange={onChange}
        sx={{ width: 184, ml: "82rem", mt: "-2rem" }}
        className="w-44 h-8 ml-[82rem] mt-[-20rem] shadow-sm shadow-slate-400 p-1 rounded-md bg-zinc-100"
      />
    </Box>
  );
};
