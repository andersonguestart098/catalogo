import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <>
      <AppBar
        position="fixed" // Navbar fixo
        sx={{
          background: "linear-gradient(135deg, #ffffff, #f7f7f7)", // Fundo branco acinzentado
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // Sombra sutil
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)", // Borda inferior sutil
          padding: "0.5rem 1rem",
          fontFamily: "Roboto, sans-serif",
          height: 70,
          zIndex: 1300, // Mantém o navbar acima de outros elementos
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center", // Garante alinhamento vertical central
            height: "100%", // Garante que os itens ocupem toda a altura do navbar
          }}
        >
          {/* Título com ícone */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="/teto.png" // Caminho da imagem
              alt="Ícone Teto"
              style={{
                width: 30,
                height: 30,
                marginRight: "0.5rem", // Espaço entre o ícone e o texto
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#333", // Texto escuro
                textTransform: "none", // Sem caixa alta
                letterSpacing: "1px",
              }}
            >
              Forros
            </Typography>
          </Box>

          {/* Botão único no canto direito */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center", // Centraliza o botão verticalmente
            }}
          >
            <Button
              sx={{
                color: "#333", // Texto escuro
                fontWeight: "500",
                textTransform: "none",
                fontFamily: "Roboto, sans-serif",
                padding: "0.5rem 1.2rem",
                backgroundColor: "#f5f5f5", // Fundo cinza claro
                borderRadius: "8px",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  backgroundColor: "#eaeaea", // Hover com contraste sutil
                },
              }}
            >
              Contato
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Espaço para evitar que o conteúdo fique sobreposto ao Navbar fixo */}
      <Box sx={{ height: 65 }}></Box>
    </>
  );
};

export default Navbar;
