import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box
      bgColor="blackAlpha.900"
      color="whiteAlpha.700"
      minH="48"
      px="16"
      py={['16', '8']}
    >
      <Stack direction={['column', 'row']} h="full" alignItems={['center', 'center']}>
        <VStack w="full" alignItems={['center', 'flex-start']}>
          <Text fontWeight="bold" fontSize="lg" mb="2">
            About Us
          </Text>
          <Text fontSize="sm" letterSpacing="widest" textAlign={['center', 'left']} mb="2">
            Best Crypto Tracker APP
          </Text>
          <Text fontSize="sm" textAlign={['center', 'left']} color="whiteAlpha.500">
            We provide real-time analysis of cryptocurrencies, helping you stay informed about the
            latest trends and prices.
          </Text>
        </VStack>
        <VStack>
          <Avatar boxSize="40" bg="white" color="black" />
          <Text fontWeight="bold" mt="2">
            Our Founder
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
