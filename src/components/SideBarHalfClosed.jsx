import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AiOutlineHome, AiOutlineOrderedList } from "react-icons/ai";
import {
  BsFillArrowLeftCircleFill,
  BsFillExclamationCircleFill,
} from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { HiUserGroup } from "react-icons/hi";
import {
  MdOutlineDashboardCustomize,
  MdProductionQuantityLimits,
  MdRealEstateAgent,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { cart, heart, notif, user } from "../assets/img";

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleClose = () => {
    setSidebarOpen(false);
  };

  return (
    <Box position="relative" top={-16}>
      <Box
        width={sidebarOpen ? "16.368rem" : "6rem"}
        height="100%"
        boxShadow={2}
        bgcolor="white"
        transition="width 0.3s"
      >
        <IconButton
          onClick={handleOpen}
          sx={{
            display: {
              xs: "block",
              md: "block",
            },
            fontSize: 20,
            ml: 2,
            mt: 2,
            cursor: "pointer",
          }}
        >
          {sidebarOpen ? null : <FaBars />}
        </IconButton>
        <Box onClick={handleClose}>
          {sidebarOpen && (
            <IconButton
              onClick={handleClose}
              sx={{
                color: "#0048B2",
                ml: "15rem",
                position: "relative",
                top: 16,
              }}
            >
              {sidebarOpen ? <BsFillArrowLeftCircleFill /> : <FaBars />}
            </IconButton>
          )}
          <Typography
            variant="h5"
            text="3xl"
            position="relative"
            top={-22}
            ml={3}
            fontFamily="Inter"
            fontWeight={600}
            sx={{ display: sidebarOpen ? "block" : "none" }}
          >
            Commission System
          </Typography>
        </Box>
        <>
          <Box
            mt={10}
            display="flex"
            flexDirection="column"
            sx={{ display: sidebarOpen ? "block" : "none" }}
          >
            <img
              src={user}
              alt="user"
              style={{
                width: "7rem",
                height: "7rem",
                marginLeft: 80,
              }}
            />
            <Button variant="h2" fontSize={18} ml={11}>
              Jama Abdi
            </Button>
            <Typography
              variant="h6"
              color="#8A92A6"
              ml={11}
              className="text-slate-400 ml-28"
            >
              @Abdi
            </Typography>
          </Box>
          <Box
            display="flex"
            ml={8}
            mt={2}
            gap={2}
            sx={{ display: sidebarOpen ? "block" : "none" }}
          >
            <img src={cart} alt="cart" />
            <img src={heart} alt="cart" />
            <img src={notif} alt="cart" />
          </Box>

          {/* NavBar */}
          <List sx={{ fontSize: 24, pl: 2 }}>
            <Divider sx={{ my: 2, mr: 2 }} />
            <>
              <ListItemButton
                button
                component={NavLink}
                to="/dashboard"
                sx={{ borderLeft: "4px solid transparent" }}
              >
                <ListItemIcon>
                  <AiOutlineHome />
                </ListItemIcon>
                <ListItemText
                  primary="Admin Dashboard"
                  sx={{ display: sidebarOpen ? "block" : "none" }}
                />
              </ListItemButton>
            </>
            <>
              <ListItemButton
                button
                component={NavLink}
                to="/agents"
                sx={{ borderLeft: "4px solid transparent" }}
              >
                <ListItemIcon>
                  <MdRealEstateAgent />
                </ListItemIcon>
                <ListItemText
                  primary="Agents"
                  sx={{ display: sidebarOpen ? "block" : "none" }}
                />
              </ListItemButton>
            </>
            <>
              <ListItemButton
                button
                component={NavLink}
                to="/customers"
                sx={{ borderLeft: "4px solid transparent" }}
              >
                <ListItemIcon>
                  <MdOutlineDashboardCustomize />
                </ListItemIcon>
                <ListItemText
                  primary="Customers"
                  sx={{ display: sidebarOpen ? "block" : "none" }}
                />
              </ListItemButton>
            </>
            <>
              <ListItemButton
                button
                component={NavLink}
                to="/products"
                sx={{ borderLeft: "4px solid transparent" }}
              >
                <ListItemIcon>
                  <MdProductionQuantityLimits />
                </ListItemIcon>
                <ListItemText
                  primary="Products"
                  sx={{ display: sidebarOpen ? "block" : "none" }}
                />
              </ListItemButton>
            </>
            <>
              <ListItemButton
                button
                component={NavLink}
                to="/orders"
                sx={{ borderLeft: "4px solid transparent" }}
              >
                <ListItemIcon>
                  <AiOutlineOrderedList />
                </ListItemIcon>
                <ListItemText
                  primary="Orders"
                  sx={{ display: sidebarOpen ? "block" : "none" }}
                />
              </ListItemButton>
            </>
            <>
              <ListItemButton
                button
                component={NavLink}
                to="/users"
                sx={{ borderLeft: "4px solid transparent" }}
              >
                <ListItemIcon>
                  <HiUserGroup />
                </ListItemIcon>
                <ListItemText
                  primary="Users"
                  sx={{ display: sidebarOpen ? "block" : "none" }}
                />
              </ListItemButton>
            </>
            <>
              <Divider my={2} mr={2} />
              <Typography variant="h6" ml={3} mt={2} mb={2} color="slate.600">
                OTHER
              </Typography>
              <ListItemButton
                button
                component={NavLink}
                to="/signout"
                sx={{ borderLeft: "4px solid transparent" }}
              >
                <ListItemIcon>
                  <GoSignOut />
                </ListItemIcon>
                <ListItemText
                  primary="SignOut"
                  sx={{ display: sidebarOpen ? "block" : "none" }}
                />
              </ListItemButton>
            </>
            <>
              <ListItemButton
                button
                component={NavLink}
                to="/help"
                sx={{ borderLeft: "4px solid transparent" }}
              >
                <ListItemIcon>
                  <BsFillExclamationCircleFill />
                </ListItemIcon>
                <ListItemText
                  primary="Help"
                  sx={{ display: sidebarOpen ? "block" : "none" }}
                />
              </ListItemButton>
            </>
          </List>
        </>
      </Box>
    </Box>
  );
};
