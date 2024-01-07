import React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const SidebarNavItem = ({ component, icon, text, to }) => {
  return (
    <ListItemButton
      button
      component={component}
      to={to}
      sx={{ borderLeft: "0.25rem solid transparent" }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};

export default SidebarNavItem;
