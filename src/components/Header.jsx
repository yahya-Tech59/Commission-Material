import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  Box,
  Button,
  IconButton,
  ListItemText,
  Typography,
} from "@mui/material";

export const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "white",
        mt: 1,
        ml: 2,
        width: "99rem",
        height: "4.75rem",
      }}
    >
      <Button sx={{ display: "flex", mt: 5, ml: 3, mr: 3 }}>
        <IconButton>
          <AiFillHome sx={{ color: "primary.main", mr: 3 }} />
        </IconButton>
        <ListItemText primary="Home" />
      </Button>

      <Box
        sx={{
          border: 1,
          borderColor: "slate.200",
          height: 36,
          mt: 2,
          ml: 6,
        }}
      />

      <Button sx={{ display: "flex", mt: 5, ml: 3, mr: 3 }}>
        <IconButton>
          <AiFillHome className="text-blue-600 text-2xl mr-3  " />
        </IconButton>
        <ListItemText primary="Paid" />
      </Button>

      <Box
        sx={{
          border: 1,
          borderColor: "slate.200",
          height: 36,
          mt: 2,
          ml: 6,
        }}
      />
      <Box
        sx={{
          display: "flex",
          gap: 4,
          marginLeft: "26rem",
          paddingLeft: "20rem",
        }}
      >
        <Typography variant="h2" sx={{ mt: 5, mr: 8, fontSize: 18 }}>
          EN
        </Typography>
        <IoMdNotificationsOutline sx={{ mt: 4, ml: 10, fontSize: 36 }} />
        <Box
          sx={{
            border: 1,
            borderColor: "slate.200",
            height: 36,
            mt: 2,
            ml: 6,
          }}
        />
        <Typography variant="h2" sx={{ mt: 5 }} fontSize={18}>
          Jama Abdi
        </Typography>
        <IconButton>
          <BiUserCircle
            sx={{ ml: "auto", mt: 4, color: "primary.main" }}
            fontSize={18}
          />
        </IconButton>
      </Box>
    </Box>
  );
};
