import { useState, useEffect, useContext, useMemo } from "react";

import { columns } from "./AgentColumns";
import { Header } from "../../layouts/Header";
import { AddAgent } from "../../Models/Agent/AddAgent";
import { IoMdAdd } from "react-icons/io";
import { DataGrid } from "@mui/x-data-grid";
import { Context } from "../../Context/Context";
import useAgentsStore from "../../Services/AgentApi";
import { Search } from "../../components/Search";
import { Box, Button, Icon, Typography } from "@mui/material";
import { Pagination } from "../../components/Pagination";

export const Agents = () => {
  const [showAddAgent, setShowAddAgent] = useState(false);
  const [searchText, setSearchText] = useState("");

  const { agents, loading, fetchAgent } = useAgentsStore();
  const { currentPage } = useContext(Context);

  useEffect(() => {
    fetchAgent(currentPage);
  }, [currentPage]);

  if (loading === true) {
    return (
      <Typography variant="h2" sx={{ ml: "53rem" }}>
        Loading...
      </Typography>
    );
  }

  // const handleEdit = (id, updatedData) => {
  //   // Find the index of the edited agent in the agents array
  //   const index = agents.findIndex((agent) => agent.id === id);

  //   if (index !== -1) {
  //     // Create a new array with the updated data
  //     const updatedAgents = [...agents];
  //     updatedAgents[index] = { ...updatedAgents[index], ...updatedData };

  //     // Update the state with the new array
  //     // This will automatically re-render the DataGrid with the updated data
  //     setAgents(updatedAgents);
  //   }
  // };

  return (
    <Box sx={{ ml: 3 }}>
      <Header />
      <Box
        sx={{
          bgcolor: "white",
          width: "96rem",
          mt: 3,
          mb: 6,

          boxShadow: "0px 4px 6px rgba(156, 163, 175, 0.15)",
          pb: 3,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600, pt: 3, ml: 4 }}>
          Agents
        </Typography>
        <Box sx={{ ml: "72rem", mb: 4.3 }}>
          <Button
            onClick={() => setShowAddAgent(true)}
            sx={{
              position: "absolute",
              display: "flex",
              gap: 1,
              bgcolor: "#3A57E8",
              color: "white",
              borderRadius: 2,
              ":hover": {
                bgcolor: "#4762e9",
              },
              cursor: "pointer",
            }}
          >
            Add Agent
            <Icon sx={{ mb: 1 }}>
              <IoMdAdd className=" text-2xl" />
            </Icon>
          </Button>
          {showAddAgent && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "full",
                height: "full",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                zIndex: 10,
              }}
            >
              <AddAgent onClose={() => setShowAddAgent(false)} />
            </Box>
          )}
        </Box>
        <Box sx={{ mb: 2 }} className="mb-2">
          <Search
            label="Search"
            variant="outlined"
            size="small"
            // value={searchText}
            // onChange={handleSearch}
            sx={{ ml: 5, mb: 2 }}
          />
        </Box>
        <Box sx={{ height: 630, width: "95%", ml: 5, mb: 4 }}>
          <DataGrid
            rows={agents}
            columns={columns}
            getRowId={(row) => row.id}
            // disableSelectionOnClick
            // checkboxSelection
          />
        </Box>

        <Box sx={{ mt: 3, pb: 1 }}>
          <Pagination />
        </Box>
      </Box>
    </Box>
  );
};
