import { useState, useEffect, useContext } from "react";

import { columns } from "./AgentColumns";
import { Header } from "../../layouts/Header";
import { AddAgent } from "../../Models/Agent/AddAgent";
import { IoMdAdd } from "react-icons/io";
import { DataGrid } from "@mui/x-data-grid";
import { Context } from "../../Context/Context";
import useAgentsStore from "../../Services/AgentApi";
import { Search } from "../../components/Search";
import { Box, Button, Icon, Stack, Typography } from "@mui/material";
import { Pagination } from "../../components/Pagination";

export const Agents = () => {
  const [showAddAgent, setShowAddAgent] = useState(false);

  const { agents, loading, fetchAgent } = useAgentsStore();
  const { currentPage } = useContext(Context);

  useEffect(() => {
    fetchAgent(currentPage);
  }, [currentPage]);

  if (loading === true) {
    return (
      <Typography variant="h2" sx={{ mr: "43rem" }}>
        Loading...
      </Typography>
    );
  }

  return (
    <Box>
      <Header />

      <Box
        bgcolor="white"
        width={{ md: "96rem", sm: "46rem" }}
        mt={3}
        mb={6}
        boxShadow="0px 4px 6px rgba(156, 163, 175, 0.15)"
        pb={{ md: 3, sm: 2 }}
        mr={7}
        // ml={{ sm: -5 }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600, pt: 3, ml: 4 }}>
          Agents
        </Typography>
        <Box ml={{ md: "72rem", sm: "26rem" }} mb={4.3}>
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
        <Box sx={{ height: 630, width: "95%", ml: { md: 5, sm: 3 }, mb: 4 }}>
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
