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
} from "@mui/material";

export const Sidebar = () => {
  const { sidebarOpen, handleOpen, handleClose } = useContext(Context);

  return (
    <Box>
      {!sidebarOpen ? (
        <Box onClick={handleOpen}>
          <FaBars sx={{ fontSize: 18, ml: 10, mt: 5, cursor: "point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er" }} />
        </Box>
      ) : (
        <Box
          sx={{
            width: "16.368rem",
            height: "100vh",
            boxShadow: 2,
            bgcolor: "white",
          }}
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
              mt: 4,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={user}
              alt="user"
              sx={{
                width: "3.6rem",
                height: "3.6rem",
              }}
            />
            <Button variant="h2" sx={{ fontSize: 18 }}>
              Jama Abdi
            </Button>
            <Typography
              variant="h5"
              sx={{ color: ["gray.500"], ml: 11 }}
              className="text-slate-400 ml-28"
            >
              @Abdi
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              ml: 8,
              mt: 2,
              gap: 2,
            }}
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
                <ListItemIcon>
                  <HiUserGroup className="ml-12 mr-5 mt-1" />
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItemButton>
            </>
            <>
              <Divider sx={{ my: 2, mr: 2 }} />
              <Typography
                variant="h6"
                sx={{ ml: 3, mt: 2, mb: 2, color: "slate.600" }}
              >
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
                  <BsFillExclamationCircleFill />
                </ListItemIcon>
                <ListItemText primary="Help" />
              </ListItemButton>
            </>
          </List>
        </Box>
      )}
    </Box>
  );
};
