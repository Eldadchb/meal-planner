import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Box, Typography, Paper } from "@mui/material";
import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

const LoginPage = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Container maxWidth="sm">
      <Box sx={{ height: "100vh", display: "flex", alignItems: "center" }}>
        <Paper sx={{ padding: 4, textAlign: "center", width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Welcome to MealPlaner
          </Typography>
          <Typography variant="body1" gutterBottom>
            {isAuthenticated
              ? "You are logged in!"
              : "Please log in to continue."}
          </Typography>
          <Box sx={{ marginTop: 2 }}>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginPage;
