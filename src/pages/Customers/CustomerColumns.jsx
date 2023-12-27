import React, { useState } from "react";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";
// import {del, edit} from '../../assets/img'
import { EditCustomer } from "../../Models/Customer/EditCustomer";
import { DeleteCustomer } from "../../Models/Customer/DeleteCustomer";
import { Box, IconButton, Icon } from "@mui/material";

export const columns = [
  { field: "id", headerName: "No", flex: 1 },
  { field: "fullname", headerName: "Name", flex: 1 },
  { field: "phone", headerName: "Contact", flex: 1 },
  { field: "address", headerName: "Address", flex: 1 },
  { field: "description", headerName: "Description", flex: 1 },
  {
    field: "agency",
    headerName: "Agency",
    flex: 1,
    renderCell: ({ row }) => {
      return <>{row.agency?.fullname}</>;
    },
  },
  {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    renderCell: ({ row }) => {
      const [showEditCustomer, setShowEditCustomer] = useState(false);
      const [showDeleteCustomer, setShowDeleteCustomer] = useState(false);
      const [id, setId] = useState(null);

      return (
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "center",
            ":hover": {
              color: "black",
            },
          }}
        >
          <IconButton
            onClick={() => {
              setId(row.id);
              setShowEditCustomer(true);
            }}
            sx={{
              bgcolor: "#3A57E8",
              color: "white",
              borderRadius: "100%",
              ":hover": {
                bgcolor: "#4562f7",
              },
            }}
          >
            <Icon sx={{ fontSize: 21 }}>
              <RiEditLine />
            </Icon>
          </IconButton>
          <IconButton
            onClick={() => {
              setId(row.id);
              setShowDeleteCustomer(true);
              alert("Customer Deleted Succesfully");
            }}
            sx={{
              bgcolor: "#3A57E8",
              color: "white",
              borderRadius: "100%",
              ":hover": {
                bgcolor: "#4562f7",
              },
            }}
          >
            <Icon sx={{ fontSize: 21 }}>
              <RiDeleteBin2Line />
            </Icon>
          </IconButton>

          {showEditCustomer && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
              }}
            >
              <EditCustomer
                onClose={() => setShowEditCustomer(false)}
                id={id}
              />
            </Box>
          )}
          {showDeleteCustomer && (
            <Box>
              <DeleteCustomer
                onClose={() => setShowDeleteCustomer(false)}
                id={id}
              />
            </Box>
          )}
        </Box>
      );
    },
  },
];
