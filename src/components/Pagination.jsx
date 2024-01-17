import { Box, Button } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../Context/Context";

export const Pagination = () => {
  const { currentPage, handlePageChange } = useContext(Context);

  return (
    <Box>
      <Box
        sx={{ display: "flex", ml: { md: "67rem", sm: "19rem" }, mt: 3, pb: 1 }}
      >
        <Button
          onClick={() => handlePageChange(currentPage === 20)}
          sx={{
            bgcolor: "primary.light",
            color: "white",
            p: 1,
            m: 1,
            pl: 2,
            pr: 2,
            borderRadius: 3,
            ":hover": {
              bgcolor: "primary.main",
            },
          }}
        >
          {"<<"}
        </Button>
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          sx={{
            bgcolor: "primary.light",
            color: "white",
            p: 1,
            m: 1,
            pl: 2,
            pr: 2,
            borderRadius: 3,
            ":hover": {
              bgcolor: "primary.main",
            },
          }}
        >
          Previous Page
        </Button>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === 20}
          sx={{
            bgcolor: "primary.light",
            color: "white",
            p: 1,
            m: 1,
            pl: 2,
            pr: 2,
            borderRadius: 3,
            ":hover": {
              bgcolor: "primary.main",
            },
          }}
        >
          Next Page
        </Button>
        <Button
          onClick={() => handlePageChange()}
          sx={{
            bgcolor: "primary.light",
            color: "white",
            p: 1,
            m: 1,
            pl: 2,
            pr: 2,
            borderRadius: 3,
            ":hover": {
              bgcolor: "primary.main",
            },
          }}
        >
          {">>"}
        </Button>
      </Box>
    </Box>
  );
};
