import React, { useState, useEffect, useContext } from "react";

import { columns } from "./UserColumns";
import { Header } from "../../layouts/Header";
// import { Table } from "../../components/Table";
import { DataGrid } from "@mui/x-data-grid";
import { AddUser } from "../../Models/User/AddUsers";
import { IoMdAdd } from "react-icons/io";
import { Context } from "../../Context/Context";
import useUsersStore from "../../Services/UserApi";
import { Box, Button, Icon, Typography } from "@mui/material";
import { Search } from "../../components/Search";

export const Users = () => {
  const [showAddUser, setShowAddUser] = useState(false);
  const { users, loading, fetchUser } = useUsersStore();

  const { currentPage, handlePageChange } = useContext(Context);

  useEffect(() => {
    fetchUser(currentPage);
  }, [currentPage]);

  if (loading === true) {
    return (
      <Typography variant="h2" sx={{ ml: "53rem" }}>
        Loading...
      </Typography>
    );
  }

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
          Users
        </Typography>

        <Box sx={{ ml: "73rem", mb: 4.3 }}>
          <Button
            onClick={() => setShowAddUser(true)}
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
            Add User
            <Icon sx={{ mb: 1 }}>
              <IoMdAdd className=" text-2xl" />
            </Icon>
          </Button>
          {showAddUser && (
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
              <AddUser onClose={() => setShowAddUser(false)} />
            </Box>
          )}
        </Box>

        <Box sx={{ mb: 2 }} className="mb-2">
          <Search />
        </Box>

        <Box sx={{ height: 630, width: "95%", ml: 5, mb: 4 }}>
          <DataGrid rows={users} columns={columns} getRowId={(row) => row.id} />
        </Box>

        <Box sx={{ ml: "67rem", mt: 3, pb: 1 }}>
          <Button
            onClick={() => handlePageChange(currentPage === 20)}
            sx={{
              bgcolor: "#d6d6d6",
              p: 1,
              m: 1,
              pl: 2,
              pr: 2,
              borderRadius: 3,
            }}
          >
            {"<<"}
          </Button>
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            sx={{
              bgcolor: "#d6d6d6",
              p: 1,
              m: 1,
              pl: 2,
              pr: 2,
              borderRadius: 3,
            }}
          >
            Previous Page
          </Button>
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === 20}
            sx={{
              bgcolor: "#d6d6d6",
              p: 1,
              m: 1,
              pl: 2,
              pr: 2,
              borderRadius: 3,
            }}
          >
            Next Page
          </Button>
          <Button
            onClick={() => handlePageChange()}
            sx={{
              bgcolor: "#d6d6d6",
              p: 1,
              m: 1,
              pl: 2,
              pr: 2,
              borderRadius: 3,
            }}
          >
            {">>"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
