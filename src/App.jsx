import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { Sidebar } from "./components/Sidebar";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";
import { useState } from "react";
import { Button, ThemeProvider, createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#007bff",
    },
    secondary: {
      main: "#6c757d",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0056b3",
    },
    secondary: {
      main: "#374151",
    },
  },
});

const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  <Button
    variant="h1"
    onClick={() => setTheme(theme === lightTheme ? darkTheme : lightTheme)}
    sx={{ position: "" }}
  >
    Dark
  </Button>;
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div className="flex bg-zinc-100 ">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="signUp" element={<SignUp />} />
              <Route element={<ProtectedRoutes />}>
                <Route
                  path="/dashboard"
                  element={[<Sidebar />, <Dashboard />]}
                />
                <Route path="agents" element={[<Sidebar />, <Agents />]} />
                <Route
                  path="customers"
                  element={[<Sidebar />, <Customers />]}
                />
                <Route path="products" element={[<Sidebar />, <Products />]} />
                <Route path="orders" element={[<Sidebar />, <Orders />]} />
                <Route path="users" element={[<Sidebar />, <Users />]} />
                <Route path="signout" element={[<Sidebar />, <SignOut />]} />
                <Route path="*" element={<NoMatch />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
