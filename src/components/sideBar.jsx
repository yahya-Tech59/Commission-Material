import React, { useContext } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { cart, heart, notif, user } from "../assets/img";
import { AiOutlineHome } from "react-icons/ai";
import {
  MdRealEstateAgent,
  MdOutlineDashboardCustomize,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { AiOutlineOrderedList } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { GoSignOut } from "react-icons/go";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { Context } from "../Context/Context";
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Button,
} from "@mui/material";

export const Sidebar = () => {
  const { sidebarOpen, handleOpen, handleClose } = useContext(Context);

  return (
    <Box>
      <IconButton
        onClick={handleOpen}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <FaBars fontSize={18} />
      </IconButton>
      <Drawer
        anchor="left"
        open={sidebarOpen}
        onClose={handleClose}
        sx={{
          "& .MuiDrawer-paper": {
            width: "16.368rem",
            boxSizing: "border-box",
            overflowx: "hidden",
          },
        }}
      >
        <Box>
          <IconButton
            onClick={handleClose}
            sx={{ color: "#0048B2", ml: "15rem" }}
          >
            <BsFillArrowLeftCircleFill />
          </IconButton>

          <Typography
            variant="h5"
            text="3xl"
            position="relative"
            top={4}
            ml={3}
            fontFamily="Inter"
            fontWeight={600}
          >
            Commission System
          </Typography>
        </Box>

        <Box mt={10} display="flex" flexDirection="column">
          <img
            src={user}
            alt="user"
            style={{
              width: "7rem",
              height: "7rem",
              marginLeft: 80,
            }}
          />
          <Button variant="h2" fontSize={18}>
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
        <Box display="flex" ml={8} mt={2} gap={2}>
          <img src={cart} alt="cart" />
          <img src={heart} alt="cart" />
          <img src={notif} alt="cart" />
        </Box>

        <List sx={{ fontSize: 24, pl: 2 }}>
          <Divider sx={{ my: 2, mr: 2 }} />
          <>
            <ListItemButton
              button
              component={NavLink}
              to="/dashboard"
              sx={{ borderLeft: "0.25rem solid transparent" }}
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
              sx={{ borderLeft: "0.25rem solid transparent" }}
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
              sx={{ borderLeft: "0.25rem solid transparent" }}
            >
              <ListItemIcon>
                <MdOutlineDashboardCustomize />
              </ListItemIcon>
              <ListItemText primary="Customers" />
            </ListItemButton>
          </>
          <>
            <ListItemButton
              button
              component={NavLink}
              to="/products"
              sx={{ borderLeft: "0.25rem solid transparent" }}
            >
              <ListItemIcon>
                <MdProductionQuantityLimits />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItemButton>
          </>
          <>
            <ListItemButton
              button
              component={NavLink}
              to="/orders"
              sx={{ borderLeft: "0.25rem solid transparent" }}
            >
              <ListItemIcon>
                <AiOutlineOrderedList />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItemButton>
          </>
          <>
            <ListItemButton
              button
              component={NavLink}
              to="/users"
              sx={{ borderLeft: "0.25rem solid transparent" }}
            >
              <ListItemIcon>
                <HiUserGroup />
              </ListItemIcon>
              <ListItemText primary="Users" />
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
              sx={{ borderLeft: "0.25rem solid transparent" }}
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
              sx={{ borderLeft: "0.25rem solid transparent" }}
            >
              <ListItemIcon>
                <BsFillExclamationCircleFill />
              </ListItemIcon>
              <ListItemText primary="Help" />
            </ListItemButton>
          </>
        </List>
      </Drawer>
    </Box>
  );
};