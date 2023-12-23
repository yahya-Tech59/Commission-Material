import React, { useContext, useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { cart, heart, notif } from "../assets/img";
import { AiOutlineHome } from "react-icons/ai";
import { MdRealEstateAgent } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineOrderedList } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { GoSignOut } from "react-icons/go";
import { BsFillExclamationCircleFill } from "react-icons/bs";

import { user } from "../assets/img";
import { NavLink } from "react-router-dom";
import { Context } from "../Context/Context";
import {
  Box,
  Button,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";

export const Sidebar = () => {
  const { sidebarOpen, handleOpen, handleClose } = useContext(Context);

  return (
    <Box>
      {!sidebarOpen ? (
        <Box onClick={handleOpen}>
          <FaBars
            sx={{ text: "3xl", ml: 10, mt: 5, cursor: "pointer" }}
            className="text-3xl ml-10 mt-5 cursor-pointer "
          />
        </Box>
      ) : (
        <Box
          sx={{ width: 260, height: "100vh", boxShadow: 4, bgcolor: "white" }}
          className="w-72 h-screen shadow-slate-400 shadow-md bg-white "
        >
          <Box onClick={handleClose}>
            <BsFillArrowLeftCircleFill className="text-blue-700 text-2xl ml-[275px] relative top-10 cursor-pointer " />
          </Box>
          <Button
            variant="h1"
            sx={{
              text: "3xl",
              position: "relative",
              top: 4,
              ml: 4,
              fontFamily: "inter",
              fontSize: 18,
            }}
          >
            Billing System
          </Button>

          <Box
            sx={{
              position: "relative",
              top: 10,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={user}
              alt="user"
              sx={{ ml: 20, mt: 10, height: "3.6rem", width: "3.6rem" }}
            />
            <Button variant="h2" sx={{ text: "xl", ml: 10 }}>
              Jama Abdi
            </Button>
            <Typography
              variant="h5"
              sx={{ text: "gray[400]", ml: 16 }}
              className="text-slate-400 ml-28"
            >
              @Abdi
            </Typography>
            <Box
              sx={{
                display: "flex",
                ml: 8,
                mt: 8,
                gap: 2,
              }}
            >
              <img src={cart} alt="cart" />
              <img src={heart} alt="cart" />
              <img src={notif} alt="cart" />
            </Box>
            {/* sx={{ mt: 10, text: "xl", listStyle: "none", ml: 2, my: 4 }} */}
            <List sx={{ mt: 10, fontSize: 24, pl: 2, py: 4 }}>
              <Divider sx={{ my: 5 }} />
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
                  <ListItemText primary="Admin Dashboard" />
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
                  <ListItemText primary="Agents" />
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
                    <MdOutlineDashboardCustomize className="ml-12 mr-5 mt-1 " />
                  </ListItemIcon>
                  <ListItemText primary="Customers" />
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
                    <MdProductionQuantityLimits className="ml-12 mr-5 mt-1" />
                  </ListItemIcon>
                  <ListItemText primary="Products" />
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
                    <AiOutlineOrderedList className="ml-12 mr-5 mt-1" />
                  </ListItemIcon>
                  <ListItemText primary="Orders" />
                </ListItemButton>
              </>
              <>
                <ListItemButton
                  button
                  component={NavLink}
                  to="/users"
                  sx={{ borderLeft: "4px solid transparent" }}
                >
                  <HiUserGroup className="ml-12 mr-5 mt-1" />
                  Users
                </ListItemButton>
              </>
              <>
                <Divider sx={{ my: 5 }} />
                <Typography
                  variant="h6"
                  sx={{ ml: 10, mt: 10, mb: 6, color: "slate.600" }}
                >
                  OTHERS
                </Typography>
                <ListItemButton
                  button
                  component={NavLink}
                  to="/signout"
                  sx={{ borderLeft: "4px solid transparent" }}
                >
                  <ListItemIcon>
                    <IconButton>{/* Add your signout icon here */}</IconButton>
                  </ListItemIcon>
                  <ListItemText primary="SignOut" />
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
                    <IconButton>{/* Add your help icon here */}</IconButton>
                  </ListItemIcon>
                  <ListItemText primary="Help" />
                </ListItemButton>
              </>
            </List>
          </Box>
        </Box>
      )}
    </Box>
  );
};
