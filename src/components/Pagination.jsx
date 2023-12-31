import { Box, Button } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../Context/Context";

export const Pagination = () => {
  const { currentPage, handlePageChange } = useContext(Context);

  return (
    <Box>
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
  );
};
