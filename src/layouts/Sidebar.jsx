import React, { useContext } from "react";
import { IconButton, Grid, Box, Drawer } from "@mui/material";
import { Context } from "../Context/Context";
import SidebarHeader from "../components/SidebarHeader";
import SidebarUserInfo from "../components/SidebarUserInfo";
import { FaBars } from "react-icons/fa";
import SidebarContent from "../components/SidebarContent";

export const Sidebar = () => {
  const { sidebarOpen, handleOpen, handleClose } = useContext(Context);

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6}>
        {!sidebarOpen ? (
          <IconButton
            onClick={handleOpen}
            sx={{
              fontSize: 18,
              ml: 2,
              mt: 2,
              cursor: "pointer",
              display: {
                xs: "block",
                sm: "block",
              },
            }}
          >
            <FaBars />
          </IconButton>
        ) : (
          <Box
            width="16.368rem"
            height="122%"
            boxShadow={2}
            bgcolor="white"
            display={{ xs: "none", sm: "none", md: "block" }}
          >
            <SidebarHeader onClose={handleClose} />
            <SidebarUserInfo />
            <SidebarContent onClose={handleClose} />
          </Box>
        )}

        <Drawer
          variant="temporary"
          open={sidebarOpen}
          onClose={handleClose}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
          }}
        >
          <SidebarHeader onClose={handleClose} />
          <SidebarUserInfo />
          <SidebarContent onClose={handleClose} />
        </Drawer>
      </Grid>
    </Grid>
  );
};
