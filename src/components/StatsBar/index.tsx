import { Box, Text, SimpleGrid } from "@chakra-ui/react";

export const StatsBar = () => {
  return (
    <Box bg="ink.800">
      <SimpleGrid columns={{ base: 2, md: 4 }}>
        <Box
          py={10}
          px={10}
          textAlign="center"
          borderRight="1px solid"
          borderColor="rgba(255,255,255,0.06)"
        >
          <Text
            fontFamily="heading"
            fontSize="44px"
            fontWeight="light"
            color="brand.primary"
            lineHeight={1}
            mb={2}
          >
            40+
          </Text>
          <Text
            fontSize="10.5px"
            letterSpacing="0.18em"
            textTransform="uppercase"
            color="rgba(255,255,255,0.36)"
          >
            Years in Auction
          </Text>
        </Box>
        <Box
          py={10}
          px={10}
          textAlign="center"
          borderRight="1px solid"
          borderColor="rgba(255,255,255,0.06)"
        >
          <Text
            fontFamily="heading"
            fontSize="44px"
            fontWeight="light"
            color="brand.primary"
            lineHeight={1}
            mb={2}
          >
            R15M+
          </Text>
          <Text
            fontSize="10.5px"
            letterSpacing="0.18em"
            textTransform="uppercase"
            color="rgba(255,255,255,0.36)"
          >
            Sold Per Season
          </Text>
        </Box>
        <Box
          py={10}
          px={10}
          textAlign="center"
          borderRight="1px solid"
          borderColor="rgba(255,255,255,0.06)"
        >
          <Text
            fontFamily="heading"
            fontSize="44px"
            fontWeight="light"
            color="brand.primary"
            lineHeight={1}
            mb={2}
          >
            6
          </Text>
          <Text
            fontSize="10.5px"
            letterSpacing="0.18em"
            textTransform="uppercase"
            color="rgba(255,255,255,0.36)"
          >
            Auctions per Year
          </Text>
        </Box>
        <Box py={10} px={10} textAlign="center">
          <Text
            fontFamily="heading"
            fontSize="44px"
            fontWeight="light"
            color="brand.primary"
            lineHeight={1}
            mb={2}
          >
            5,000+
          </Text>
          <Text
            fontSize="10.5px"
            letterSpacing="0.18em"
            textTransform="uppercase"
            color="rgba(255,255,255,0.36)"
          >
            Registered Bidders
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
