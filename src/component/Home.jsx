import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import btcSrc from "../assets/bitcoin.png";

const Home = () => {
  return (
    <Box
      bg="black"
      w="full"
      minh="85vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      px={[4, 8, 12]} // Responsive padding on different breakpoints
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        <Image
          w="full"
          h="full"
          objectFit="contain"
          src={btcSrc}
         
        />
      </motion.div>
      <Text
        fontSize={["4xl", "5xl", "6xl"]} // Responsive font size on different breakpoints
        textAlign="center"
        fontWeight="thin"
        color="whiteAlpha.700"
        mt={-10}
      >
        Crypto Buddy
      </Text>
      <Text
        fontSize={["lg", "xl", "2xl"]} // Responsive font size on different breakpoints
        textAlign="center"
        fontWeight="light"
        color="whiteAlpha.700"
        mt={4}
      >
        Your go-to companion for tracking and analyzing cryptocurrencies.
      </Text>
      <Text
        fontSize={["md", "lg", "xl"]} // Responsive font size on different breakpoints
        textAlign="center"
        fontWeight="light"
        color="whiteAlpha.700"
        mt={4}
        mb={8}
      >
        Stay updated with real-time market data, monitor price fluctuations, and discover new investment opportunities.
      </Text>
    </Box>
  );
};

export default Home;
