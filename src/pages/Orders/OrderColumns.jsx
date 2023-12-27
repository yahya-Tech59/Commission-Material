import React, { useState } from "react";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";
import { EditOrder } from "../../Models/Order/EditOrder";
import { DeleteOrder } from "../../Models/Order/DeleteOrder";
import { Box, IconButton, Icon } from "@mui/material";

export const columns = [
  { field: "id", headerName: "No", flex: 1 },
  { field: "description", headerName: "Description", flex: 1 },
  { field: "status", headerName: "Status", flex: 1 },
  {
    field: "product_id",
    headerName: "Product",
    flex: 1,
    renderCell: ({ row }) => <>{row.product?.name}</>,
  },
  {
    field: "product_price_id",
    headerName: "Product-Price",
    flex: 1,
    renderCell: ({ row }) => <>{row.product?.price}</>,
  },
  {
    field: "product_commission",
    headerName: "Product-Commission",
    flex: 1,
    renderCell: ({ row }) => <>{row.product?.price}</>,
  },
  {
    field: "customer",
    headerName: "Customer",
    flex: 1,
    renderCell: ({ row }) => {
      const customer =
        row.customer && row.customer.length > 0 ? row.customer[0] : null;
      return <>{customer ? customer.fullname : ""}</>;
    },
  },
  {
    field: "agent",
    headerName: "Agent",
    flex: 1,
    renderCell: ({ row }) => {
      const agent = row.agent && row.agent.length > 0 ? row.agent[0] : null;
      return <>{agent ? agent.fullname : ""}</>;
    },
  },
  { field: "status_label", headerName: "Status-Label", flex: 1 },
  {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    renderCell: ({ row }) => {
      const [showEditOrder, setShowEditOrder] = useState(false);
      const [showDeleteOrder, setShowDeleteOrder] = useState(false);
      const [id, setId] = useState(null);

      return (
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            ":hover": {
              color: "black",
            },
          }}
        >
          <IconButton
            onClick={() => {
              setShowEditOrder(true);
              setId(row.id);
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
              setShowDeleteOrder(true);
              setId(row.id);
              alert("Order Deleted Successfully ");
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

          {showEditOrder && (
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
              <EditOrder onClose={() => setShowEditOrder(false)} id={id} />
            </Box>
          )}
          {showDeleteOrder && (
            <Box>
              <DeleteOrder onClose={() => setShowDeleteOrder(false)} id={id} />
            </Box>
          )}
        </Box>
      );
    },
  },
];
