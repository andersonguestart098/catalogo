import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

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
              src="/cimento.png" // Caminho da imagem
              alt="Ícone Teto"
              style={{
                width: 40,
                height: 40,
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
              Autonivelante
            </Typography>
          </Box>

          {/* Botão único no canto direito */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center", // Centraliza o botão verticalmente
            }}
          ></Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
