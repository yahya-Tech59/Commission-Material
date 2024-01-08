import React from "react";
import { List, Divider, Typography } from "@mui/material";
import SidebarNavItem from "../components/SidebarNavItem";
import { AiOutlineHome, AiOutlineOrderedList } from "react-icons/ai";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";
import { HiUserGroup } from "react-icons/hi";
import {
  MdOutlineDashboardCustomize,
  MdProductionQuantityLimits,
  MdRealEstateAgent,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

const SidebarContent = ({ onClose }) => (
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
);

export default SidebarContent;
