import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import AuthenticatedApp from "./auth/authenticated-app";

const App = () => {
  return (
    <Container maxWidth="sm">
      <Paper
        sx={{
          padding: 4,
          textAlign: "center",
          marginTop: 8,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome to Meal Planner!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Please log in to continue.
        </Typography>
        <AuthenticatedApp />
      </Paper>
    </Container>
  );
};

export default App;
