import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  Dashboard,
  Agents,
  Customers,
  Products,
  Orders,
  Users,
  SignIn,
  SignUp,
  SignOut,
} from "./pages/index";
import { NoMatch } from "./utils/NoMatch";
import { Sidebar } from "./layouts/Sidebar";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";
import { Box, Paper } from "@mui/material";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "signUp",
      element: <SignUp />,
    },
    {
      element: <ProtectedRoutes />,
      children: [
        {
          index: true,
          element: (
            <>
              <Sidebar />
              <Dashboard />
            </>
          ),
        },
        {
          path: "dashboard",
          element: (
            <>
              <Sidebar />
              <Dashboard />
            </>
          ),
        },
        {
          path: "agents",
          element: (
            <>
              <Sidebar />
              <Agents />
            </>
          ),
        },
        {
          path: "customers",
          element: (
            <>
              <Sidebar />
              <Customers />
            </>
          ),
        },
        {
          path: "products",
          element: (
            <>
              <Sidebar />
              <Products />
            </>
          ),
        },
        {
          path: "orders",
          element: (
            <>
              <Sidebar />
              <Orders />
            </>
          ),
        },
        {
          path: "users",
          element: (
            <>
              <Sidebar />
              <Users />
            </>
          ),
        },
        {
          path: "signout",
          element: (
            <>
              <Sidebar />
              <SignOut />
            </>
          ),
        },
        {
          path: "*",
          element: (
            <>
              <Sidebar />
              <NoMatch />
            </>
          ),
        },
      ],
    },
  ]);

  return (
    <Box sx={{ margin: 0 }}>
      <Paper
        sx={{
          display: "flex",
          bgcolor: "#F9F9F9",
          margin: 0,
        }}
      >
        <RouterProvider router={router}>
          <Outlet /> {/* Render nested routes based on URL */}
        </RouterProvider>
      </Paper>
    </Box>
  );
};

export default App;
