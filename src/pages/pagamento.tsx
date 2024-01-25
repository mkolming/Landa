import { useState, useEffect } from "react";
import React from "react";
import { Box, Image, Text, Progress, Flex, Button } from "@chakra-ui/react";

const Pagamento = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [progress, setProgress] = useState(100);
  const tempoExpiracao = 300;

  useEffect(() => {
    const fetchQrCode = async () => {
      const cartid = localStorage.getItem("cartId");
      try {
        const response = await fetch("http://127.0.0.1:8000/api/gerar-pix", {
          method: "POST", // Mudar para POST
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cart_id: cartid }),
        });
        if (!response.ok) throw new Error("Erro ao buscar QR Code");

        const data = await response.json();
        setQrCodeUrl(data.url_qr_code);
      } catch (error) {
        console.error("Erro:", error);
      }
    };

    fetchQrCode();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const novoProgresso = prevProgress - 100 / tempoExpiracao;
        return novoProgresso > 0 ? novoProgresso : 0;
      });
    }, 1000); // Intervalo de 1 segundo

    if (progress <= 0) {
      clearInterval(interval);
      // Aqui você pode adicionar qualquer lógica adicional quando o tempo expirar
    }

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <Flex direction="column" align="center" justify="center" p={6}>
      <Box border="1px" borderColor="gray.200" p={6} borderRadius="md">
        {qrCodeUrl ? (
          <Image src={qrCodeUrl} alt="QR Code Pix" boxSize="300px" />
        ) : (
          <Text>Carregando QR Code...</Text>
        )}

        <Text mt={4} fontWeight="bold">
          Escaneie o QR Code para realizar o pagamento
        </Text>

        <Progress colorScheme="green" size="lg" value={progress} mt={4} />

        <Text mt={2}>
          Você tem {((tempoExpiracao * progress) / 100).toFixed(0)} segundos
          para completar o pagamento
        </Text>
      </Box>
    </Flex>
  );
};

export default Pagamento;
