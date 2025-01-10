import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Dialog,
  Fab,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const products = [
  {
    id: 1,
    name: "Autonivelante Base",
    type: "Autonivelante",
    color: "Cinza",
    brand: "Hunter Douglas",
    availability: "Disponível",
    thickness: "10mm",
    weight: "3,4kg/m²",
    use: "Interno",
    base: "Contra Pisos, Concretos e Pisos Cerâmicos",
    logo: "/protec.png",
    image: "/cola.png",
  },
];

const Catalog: React.FC = () => {
  const [open, setOpen] = useState(false); // Controle do modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Armazena a imagem selecionada

  const handleImageClick = (image: string) => {
    setSelectedImage(image); // Define a imagem selecionada
    setOpen(true); // Abre o modal
  };

  const handleClose = () => {
    setOpen(false); // Fecha o modal
    setSelectedImage(null); // Reseta a imagem selecionada
  };

  const handleSendMessage = (product: {
    name: string;
    type: string;
    brand: string;
    availability: string;
    color: string;
    thickness: string;
    weight: string;
    use: string;
    base: string;
  }) => {
    const phoneNumber = "51982961257"; // Número do WhatsApp
    const message =
      `Olá, tenho interesse no produto "${product.name}". Seguem os detalhes:\n\n` +
      `- Tipo: ${product.type}\n` +
      `- Marca: ${product.brand}\n` +
      `- Disponibilidade: ${product.availability}\n` +
      `- Cor: ${product.color}\n` +
      `- Espessura: ${product.thickness}\n` +
      `- Peso: ${product.weight}\n` +
      `- Uso: ${product.use}\n` +
      `- Bases de Aplicação: ${product.base}\n\n` +
      `Gostaria de obter mais informações sobre este produto.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank"); // Abre o link no WhatsApp
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "2rem",
        background: "linear-gradient(135deg, #f7f7f7, #eeeeee)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{
                background: "#ffffff",
                borderRadius: "12px",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                },
                position: "relative",
              }}
            >
              {/* Título */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  padding: "0.5rem 1rem",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                  background: "#f5f5f5",
                  borderRadius: "12px 12px 0 0",
                  color: "#333",
                }}
              >
                {product.name}
              </Typography>

              {/* Imagem */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "250px",
                  overflow: "hidden",
                  backgroundColor: "#f9f9f9",
                  cursor: "pointer",
                }}
                onClick={() => handleImageClick(product.image)} // Abre a imagem em fullscreen
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  image={product.image}
                  alt={product.name}
                />
              </Box>

              {/* Descrição */}
              <CardContent
                sx={{
                  textAlign: "left",
                  padding: "1rem",
                }}
              >
                <Typography variant="body2" sx={{ marginBottom: "0.5rem" }}>
                  <strong>Tipo:</strong> {product.type}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginBottom: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <strong>Marca:</strong>{" "}
                  <Box
                    component="img"
                    src={product.logo}
                    alt={`${product.brand} logo`}
                    sx={{
                      width: "auto",
                      height: 30,
                      marginLeft: "0.5rem",
                    }}
                  />
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: "0.5rem" }}>
                  <strong>Cor:</strong> {product.color}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: "0.5rem" }}>
                  <strong>Espessura:</strong> Até {product.thickness}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color:
                      product.availability === "Disponível" ? "green" : "red",
                  }}
                >
                  <strong>Disponibilidade:</strong> {product.availability}
                </Typography>
              </CardContent>

              {/* Botão de WhatsApp */}
              <Fab
                sx={{
                  position: "absolute",
                  bottom: 16,
                  right: 16,
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#45a049",
                  },
                }}
                onClick={() => handleSendMessage(product)}
              >
                <SendIcon />
              </Fab>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal para exibir a imagem em fullscreen */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen // Configuração para fullscreen
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
            height: "100%",
            cursor: "pointer", // Cursor de ponteiro para indicar interatividade
          }}
          onClick={handleClose} // Fecha ao clicar na imagem
        >
          <img
            src={selectedImage || ""}
            alt="Imagem em fullscreen"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </Box>
      </Dialog>
    </Box>
  );
};

export default Catalog;
