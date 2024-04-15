import React from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HStack p="4" shadow="base" bgColor="blackAlpha.900">
      <Button
        marginLeft="4"
        fontSize="x-large"
        variant="unstyled"
        color="white"
        _hover={{ bgColor: 'teal.500', color: 'white', transform: 'scale(1.1)' }}
        transition="background-color 0.3s, transform 0.3s"
      >
        <Link to="/">Home</Link>
      </Button>
      <Button
        marginLeft="4"
        fontSize="x-large"
        variant="unstyled"
        color="white"
        _hover={{ bgColor: 'orange.500', color: 'white', transform: 'scale(1.1)' }}
        transition="background-color 0.3s, transform 0.3s"
      >
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button
        marginLeft="4"
        fontSize="x-large"
        variant="unstyled"
        color="white"
        _hover={{ bgColor: 'pink.500', color: 'white', transform: 'scale(1.1)' }}
        transition="background-color 0.3s, transform 0.3s"
      >
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
