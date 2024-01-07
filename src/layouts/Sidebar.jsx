import React, { useContext } from "react";
import {
  IconButton,
  List,
  Divider,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import { Context } from "../Context/Context";
import SidebarHeader from "../components/SidebarHeader";
import SidebarUserInfo from "../components/SidebarUserInfo";
import SidebarNavItem from "../components/SidebarNavItem";
import { AiOutlineHome, AiOutlineOrderedList } from "react-icons/ai";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { HiUserGroup } from "react-icons/hi";
import {
  MdOutlineDashboardCustomize,
  MdProductionQuantityLimits,
  MdRealEstateAgent,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const { sidebarOpen, handleOpen, handleClose } = useContext(Context);

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={sidebarOpen ? 3 : 1}>
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
            height="100%"
            boxShadow={2}
            bgcolor="white"
            display={{ xs: "none", sm: "none", md: "block" }}
          >
            <SidebarHeader onClose={handleClose} />
            <SidebarUserInfo />

            {/* NavBar */}
            <List sx={{ fontSize: 24, pl: 2 }}>
              <Divider sx={{ my: 2, mr: 2 }} />

              <SidebarNavItem
                component={NavLink}
                icon={<AiOutlineHome />}
                text="Admin Dashboard"
                to="/dashboard"
              />
              <SidebarNavItem
                component={NavLink}
                icon={<MdRealEstateAgent />}
                text="Agents"
                to="/agents"
              />
              <SidebarNavItem
                component={NavLink}
                icon={<MdOutlineDashboardCustomize />}
                text="Customers"
                to="/customers"
              />
              <SidebarNavItem
                component={NavLink}
                icon={<MdProductionQuantityLimits />}
                text="Products"
                to="/products"
              />
              <SidebarNavItem
                component={NavLink}
                icon={<AiOutlineOrderedList />}
                text="Orders"
                to="/orders"
              />
              <SidebarNavItem icon={<HiUserGroup />} text="Users" to="/users" />

              <Divider my={2} mr={2} />
              <Typography variant="h6" ml={3} mt={2} mb={2} color="slate.600">
                OTHER
              </Typography>

              <SidebarNavItem
                component={NavLink}
                icon={<GoSignOut />}
                text="SignOut"
                to="/signout"
              />
              <SidebarNavItem
                icon={<BsFillExclamationCircleFill />}
                text="Help"
                to="/help"
              />
            </List>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};
