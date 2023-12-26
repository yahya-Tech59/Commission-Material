import React, { useState } from "react";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";
import { EditAgent } from "../../Models/Agent/EditAgent";
import { DeleteAgent } from "../../Models/Agent/DeleteAgent";
import { Box, Button } from "@mui/material";

export const columns = [
  { field: "id", headerName: "No", flex: 1 },
  { field: "fullname", headerName: "Name", flex: 1 },
  { field: "description", headerName: "Description", flex: 1 },
  { field: "business", headerName: "Business", flex: 1 },
  { field: "phone", headerName: "Contact", flex: 1 },
  {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    sortable: false,
    renderCell: ({ row }) => {
      const [showEditAgent, setShowEditAgent] = useState(false);
      const [showDeleteAgent, setShowDeleteAgent] = useState(false);
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
          <Button
            onClick={() => {
              setId(row.id);
              setShowEditAgent(true);
            }}
            sx={{
              bgcolor: "#3A57E8",
              color: "white",
              borderRadius: "3.125rem",
              ":hover": {
                bgcolor: "#4562f7",
              },
              fontSize: 18,
            }}
          >
            <RiEditLine />
          </Button>
          <Button
            onClick={() => {
              setId(row.id);
              setShowDeleteAgent(true);
              alert("deleted successfuly");
            }}
            sx={{
              bgcolor: "#3A57E8",
              color: "white",
              borderRadius: "3.125rem",
              ":hover": {
                bgcolor: "#4562f7",
              },
              fontSize: 18,
            }}
          >
            <RiDeleteBin2Line />
          </Button>

          {showEditAgent && (
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
              <EditAgent onClose={() => setShowEditAgent(false)} id={id} />
            </Box>
          )}
          {showDeleteAgent && (
            <Box>
              <DeleteAgent onClose={() => setShowDeleteAgent(false)} id={id} />
            </Box>
          )}
        </Box>
      );
    },
  },
];
