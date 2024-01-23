import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

function ConfirmationAlert() {
  return (
    <Alert
      status="success"
      variant="subtle"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
      borderRadius={5}
      height="150px"
      mt={5}
    >
      <AlertIcon mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Produto adicionado ao carrinho!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Você pode continuar comprando ou ir para o carrinho para finalizar a
        compra.
      </AlertDescription>
    </Alert>
  );
}

export default ConfirmationAlert;
