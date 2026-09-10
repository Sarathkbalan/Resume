import React from 'react';
import { Box, HStack, Badge, Text, Tooltip, Icon } from '@chakra-ui/react';
import { TechLogo } from './TechLogo';

export const ChakraWidget: React.FC = () => {
  return (
    <Box
      display="inline-flex"
      alignItems="center"
      bg="rgba(15, 23, 42, 0.7)"
      borderWidth="1px"
      borderColor="rgba(49, 151, 149, 0.3)"
      borderRadius="xl"
      px={3}
      py={1.5}
      backdropFilter="blur(8px)"
      transition="all 0.2s"
      _hover={{
        borderColor: 'rgba(49, 151, 149, 0.6)',
        transform: 'translateY(-1px)',
      }}
    >
      <HStack spacing={2}>
        <TechLogo name="Chakra UI" size={16} />
        <Text fontSize="xs" fontWeight="semibold" color="teal.300" fontFamily="mono">
          Powered with Chakra UI & JS
        </Text>
        <Badge
          colorScheme="teal"
          variant="subtle"
          fontSize="2xs"
          px={1.5}
          borderRadius="md"
        >
          ACTIVE
        </Badge>
      </HStack>
    </Box>
  );
};
