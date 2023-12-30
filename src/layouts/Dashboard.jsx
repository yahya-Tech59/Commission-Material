import React from "react";
import { Footer } from "./Footer";
import { Chart } from "./Chart/Chart";
import { Header } from "./Header";
import { Box, Select, Typography } from "@mui/material";
import { AlertCom } from "../components/Alert";

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
                sx={{ mt: 12, fontSize: 30, fontWeight: 500, mb: 4 }}
              >
                Dashboard
              </Typography>
              <select
                defaultValue=""
                style={{
                  height: 20,
                  position: "relative",
                  top: 100,
                  right: 40,
                  border: "none",
                  color: "#3A57E8",
                }}
              >
                <option value="">Last 30 Days</option>
              </select>
            </Box>

            <Box sx={{ ml: 3 }}>
              <Box
                sx={{
                  height: 116,
                  width: 320,
                  backgroundColor: "white",
                  boxShadow: "0px 4px 6px rgba(156, 163, 175, 0.15)",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "20px",
                }}
              >
                <Typography variant="h6" sx={{}}>
                  Hide
                </Typography>

                <Typography
                  variant="h5"
                  color="primary"
                  sx={{
                    position: "relative",
                    bottom: 28,
                    left: 260,
                    bgcolor: "#EBEEFD",
                    color: "#3A57E8",
                    borderRadius: "1rem",
                    fontFamily: "inter",
                    fontSize: "1rem",
                    p: 0,
                  }}
                >
                  Yearly
                </Typography>

                <Box sx={{ position: "relative", bottom: 52, right: 30 }}>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 500, ml: 5, mt: 5 }}
                  >
                    2,590
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 1, ml: 5, color: "#8A92A6" }}
                  >
                    Agency
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  height: 116,
                  width: 320,
                  backgroundColor: "white",
                  boxShadow: "0px 4px 6px rgba(156, 163, 175, 0.15)",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "20px",
                  ml: "24rem",
                  mt: "-9.8rem",
                }}
              >
                <Typography variant="h6" sx={{}}>
                  Hide
                </Typography>

                <Typography
                  variant="h5"
                  color="primary"
                  sx={{
                    position: "relative",
                    bottom: 28,
                    left: 260,
                    bgcolor: "#EBEEFD",
                    color: "#3A57E8",
                    borderRadius: "1rem",
                    fontFamily: "inter",
                    fontSize: "1rem",
                    p: 0.5,
                  }}
                >
                  Yearly
                </Typography>

                <Box sx={{ position: "relative", bottom: 52, right: 30 }}>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 500, ml: 5, mt: 5 }}
                  >
                    10,000
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 1, ml: 5, color: "#8A92A6" }}
                  >
                    Customers
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  height: 116,
                  width: 320,
                  backgroundColor: "white",
                  boxShadow: "0px 4px 6px rgba(156, 163, 175, 0.15)", // Adjusted for MUI's shadow prop
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "20px",
                  ml: "48rem",
                  mt: "-9.8rem",
                }}
              >
                <Typography variant="h6" sx={{}}>
                  Hide
                </Typography>

                <Typography
                  variant="h5"
                  color="primary"
                  sx={{
                    position: "relative",
                    bottom: 28,
                    left: 260,
                    bgcolor: "#EBEEFD",
                    color: "#3A57E8",
                    borderRadius: "1rem",
                    fontFamily: "inter",
                    fontSize: "1rem",
                    p: 0.5,
                  }}
                >
                  Yearly
                </Typography>

                <Box sx={{ position: "relative", bottom: 52, right: 30 }}>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 500, ml: 5, mt: 5 }}
                  >
                    100
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 1, ml: 5, color: "#8A92A6" }}
                  >
                    Products
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  height: 116,
                  width: 320,
                  bgcolor: "white",
                  boxShadow: "0px 4px 6px rgba(156, 163, 175, 0.15)", // Adjusted for MUI's shadow prop
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "20px",
                  ml: "72rem",
                  mt: "-9.8rem",
                }}
              >
                <Typography variant="h6" sx={{}}>
                  Hide
                </Typography>

                <Typography
                  variant="h5"
                  color="primary"
                  sx={{
                    position: "relative",
                    bottom: 28,
                    left: 260,
                    bgcolor: "#EBEEFD",
                    color: "#3A57E8",
                    borderRadius: "1rem",
                    fontFamily: "inter",
                    fontSize: "1rem",
                    p: 0.5,
                  }}
                >
                  Yearly
                </Typography>

                <Box sx={{ position: "relative", bottom: 52, right: 30 }}>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 500, ml: 5, mt: 5 }}
                  >
                    150
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 1, ml: 5, color: "#8A92A6" }}
                  >
                    Orders
                  </Typography>
                </Box>
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