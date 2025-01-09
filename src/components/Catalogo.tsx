import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const products = [
  {
    id: 1,
    name: "Forro Acústico Hunter Douglas",
    description: "Solução acústica elegante e moderna para interiores.",
    image: "https://via.placeholder.com/150x150", // Substituir por imagens reais
  },
  {
    id: 2,
    name: "Forro Metálico Linear",
    description: "Design contemporâneo e durável para ambientes.",
    image: "https://via.placeholder.com/150x150",
  },
  // Adicione mais produtos conforme necessário
];

const Catalog: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detecta telas pequenas (mobile)

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "2rem",
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)", // Tons claros e suaves
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} key={product.id}>
            <Card
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row", // Horizontal no desktop, vertical no mobile
                alignItems: "center",
                padding: "1rem",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: isMobile ? "none" : "translateY(-5px)", // Remove efeito no mobile
                  boxShadow: isMobile
                    ? "0 4px 10px rgba(0, 0, 0, 0.1)"
                    : "0 8px 20px rgba(0, 0, 0, 0.2)",
                },
                background: "#ffffff", // Fundo branco para o card
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: isMobile ? "100%" : 150, // Imagem ocupa 100% no mobile
                  height: isMobile ? "auto" : 150,
                  borderRadius: isMobile ? "10px 10px 0 0" : "8px",
                  marginBottom: isMobile ? "1rem" : 0,
                  marginRight: isMobile ? 0 : "1rem",
                }}
                image={product.image}
                alt={product.name}
              />
              <CardContent
                sx={{
                  textAlign: isMobile ? "center" : "left", // Centraliza no mobile
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold", color: "#333" }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: "0.5rem", color: "#555" }}
                >
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Catalog;
