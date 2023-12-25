import React from "react";
import { Footer } from "../components/Footer";
import { Chart } from "../components/Chart/Chart";
import { Header } from "../components/Header";
import { Box, Select, Typography } from "@mui/material";

export const Dashboard = () => {
  return (
    <Box sx={{ color: "gray.400", display: "flex" }}>
      <Box sx={{ flexDirection: "column" }}>
        <Box sx={{ ml: 2 }}>
          <Header />
          <Box sx={{ mt: "-4rem", ml: 2 }} className="mt-[-4rem] ml-2">
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="h5"
                sx={{ mt: 20, fontSize: 30, fontWeight: 500, mb: 6 }}
              >
                Dashboard
              </Typography>
              <Select
                defaultValue=""
                sx={{
                  height: 25,
                  mt: 16,
                  mr: 20,
                  color: "blue.500",
                }}
                label="Last 30 Days"
              >
                <option value="">Last 30 Days</option>
              </Select>
            </Box>

            <Box className="">
              <Box
                sx={{
                  height: 144,
                  width: 352,
                  backgroundColor: "white",
                  boxShadow: "0px 4px 6px rgba(156, 163, 175, 0.15)", // Adjusted for MUI's shadow prop
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "20px",
                }}
              >
                <Typography variant="h6" sx={{ ml: 5, mt: 4 }}>
                  Hide
                </Typography>

                <Typography
                  variant="h5"
                  color="primary"
                  sx={{
                    position: "relative",
                    top: 8, // Adjusted for MUI's positioning
                    right: 12,
                    backgroundColor: "gray.200",
                    borderRadius: "16px",
                  }}
                >
                  Yearly
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 500, ml: 5, mt: 5 }}>
                  2,590
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: 1, ml: 5, color: "slate.400" }}
                >
                  Agency
                </Typography>
              </Box>

              <Box
                sx={{
                  height: 144,
                  width: 352,
                  backgroundColor: "white",
                  boxShadow: "0px 4px 6px rgba(156, 163, 175, 0.15)",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "20px",
                  ml: "26rem",
                  mt: "-11.5rem",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    bgcolor: "gray.400",
                    width: 12,
                    h: 6,
                    color: "blue.500",
                    borderRadius: 50,
                    position: "relative",
                    top: 3,
                  }}
                >
                  Yearly
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 500, ml: 5, mt: 3 }}>
                  10,000
                </Typography>

                <Typography
                  variant="h5"
                  sx={{ mt: 5, ml: 5, color: "gray.400" }}
                >
                  Customers
                </Typography>
              </Box>

              <Box
                sx={{
                  height: 144,
                  width: 352,
                  backgroundColor: "white",
                  boxShadow: "0px 4px 6px rgba(156, 163, 175, 0.15)", // Adjusted for MUI's shadow prop
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "20px",
                  ml: "48rem",
                  mt: "-11.5rem",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    bgcolor: "gray.400",
                    width: 12,
                    h: 6,
                    color: "blue.500",
                    borderRadius: 50,
                    position: "relative",
                    top: 3,
                  }}
                >
                  Yearly
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 500, ml: 5, mt: 3 }}>
                  12,00
                </Typography>

                <Typography
                  variant="h5"
                  sx={{ mt: 5, ml: 5, color: "gray.400" }}
                >
                  Products
                </Typography>
              </Box>

              <Box
                sx={{
                  height: 144,
                  width: 352,
                  bgcolor: "white",
                  boxShadow: "0px 4px 6px rgba(156, 163, 175, 0.15)", // Adjusted for MUI's shadow prop
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "20px",
                  ml: "72.7rem",
                  mt: "-11.5rem",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    bgcolor: "gray.400",
                    width: 12,
                    h: 6,
                    color: "blue.500",
                    borderRadius: 50,
                    position: "relative",
                    top: 3,
                  }}
                >
                  Yearly
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 500, ml: 5, mt: 3 }}>
                  1,500
                </Typography>

                <Typography
                  variant="h5"
                  sx={{ mt: 5, ml: 5, color: "gray.400" }}
                >
                  Orders
                </Typography>
              </Box>
            </Box>
          </Box>

          <div className="flex flex-col ">
            <Chart />
            <Footer className="" />
          </div>
        </Box>
      </Box>
    </Box>
  );
};
