import { RouterProvider } from "react-router-dom";
import { router } from "./utils/Router";

import { Box, Paper } from "@mui/material";

const App = () => {
  return (
    <Box sx={{ margin: 0 }}>
      <Paper
        sx={{
          display: "flex",
          bgcolor: "#F9F9F9",
          margin: 0,
          overflowX: "hidden",
        }}
      >
        <RouterProvider router={router} />
      </Paper>
    </Box>
  );
};

export default App;
