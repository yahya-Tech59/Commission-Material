import React, { useState } from "react";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";
import { EditProduct } from "../../Models/Product/EditProduct";
import { DeleteProduct } from "../../Models/Product/DeleteProduct";
import { Box, IconButton, Icon } from "@mui/material";

export const columns = [
  { field: "id", headerName: "No", flex: 1 },
  { field: "name", headerName: "Prod_Name", flex: 1 },
  { field: "price", headerName: "Price", flex: 1 },
  { field: "commission", headerName: "Commission", flex: 1 },
  {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    renderCell: ({ row }) => {
      const [showEditProduct, setShowEditProduct] = useState(false);
      const [showDeleteProduct, setShowDeleteProduct] = useState(false);
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
              setShowEditProduct(true);
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
              setShowDeleteProduct(true);
              setId(row.id);
              alert("Product Deleted Successfully");
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

          {showEditProduct && (
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
              <EditProduct onClose={() => setShowEditProduct(false)} id={id} />
            </Box>
          )}
          {showDeleteProduct && (
            <Box>
              <DeleteProduct
                onClose={() => setShowDeleteProduct(false)}
                id={id}
              />
            </Box>
          )}
        </Box>
      );
    },
  },
];
