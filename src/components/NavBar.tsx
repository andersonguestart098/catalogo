import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(135deg, #d9e4f5, #b2c5e9)", // Fundo com leve contraste
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Sombra suave
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)", // Separador
        padding: "0.5rem 1rem",
        fontFamily: "Roboto, sans-serif", // Fonte moderna
        height: 65,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Título ou logo */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#213547", // Texto mais escuro
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Hunter Douglas
        </Typography>

        {/* Botão único no canto direito */}
        <Box>
          <Button
            sx={{
              color: "#ffffff",
              fontWeight: "500",
              textTransform: "none",
              fontFamily: "Roboto, sans-serif",
              padding: "0.5rem 1.2rem",
              backgroundColor: "#4a90e2",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#357abd",
              },
            }}
          >
            Contato
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
