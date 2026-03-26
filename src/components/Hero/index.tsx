import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import photo1 from "@/assets/photos/photo_1.jpg";
import photo2 from "@/assets/photos/photo_2.jpg";

export const Hero = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      minH="calc(100vh - 114px)"
    >
      {/* Hero Left */}
      <Flex
        direction="column"
        justify="flex-end"
        p={{ base: 16, lg: 20 }}
        bg="white"
      >
        <HStack gap={3} mb={8}>
          <Box w="32px" h="1px" bg="brand.primary" />
          <Text
            fontSize="11px"
            letterSpacing="0.22em"
            textTransform="uppercase"
            color="text.secondary"
          >
            Johannesburg's Premier Auction House
          </Text>
        </HStack>

        <Heading
          fontFamily="heading"
          fontSize={{ base: "52px", lg: "84px" }}
          fontWeight="light"
          lineHeight={1}
          color="text.primary"
          mb={7}
        >
          Where Fine Art
          <br />
          Finds Its
          <br />
          <Text as="em" fontStyle="italic" color="brand.hover">
            True Value
          </Text>
        </Heading>

        <Text
          fontSize="15px"
          lineHeight={1.75}
          color="text.secondary"
          maxW="380px"
          mb={12}
        >
          Specialising in art, antiques, jewellery and design objects. Trusted
          by collectors and consignors across South Africa since 1984.
        </Text>

        <HStack gap={7}>
          <Button
            bg="text.primary"
            color="bg.surface"
            fontSize="12px"
            fontWeight="medium"
            letterSpacing="0.14em"
            textTransform="uppercase"
            px={8}
            py={4}
            borderRadius="md"
            _hover={{
              bg: "ink.700",
              transform: "translateY(-1px)",
            }}
          >
            Get a Valuation
          </Button>
          <Link
            fontSize="12px"
            letterSpacing="0.14em"
            textTransform="uppercase"
            color="text.secondary"
            borderBottom="1px solid"
            borderColor="border.default"
            pb={0.5}
            _hover={{
              color: "text.primary",
            }}
          >
            View Upcoming Sessions
          </Link>
        </HStack>
      </Flex>

      {/* Hero Right - Photo Gallery */}
      <Box
        position="relative"
        overflow="hidden"
        display={{ base: "none", lg: "block" }}
      >
        {/* Main Photo Display */}
        <Flex
          direction="column"
          h="full"
          gap={1}
        >
          {/* Top Photo */}
          <Box
            flex={1}
            position="relative"
            overflow="hidden"
            borderRadius="0 0 0 md"
          >
            <Image
              src={photo1}
              alt="Russell Kaplan Auctioneers - Fine Art Collection"
              w="full"
              h="full"
              objectFit="cover"
              objectPosition="center"
              transition="transform 0.8s ease"
              _hover={{ transform: "scale(1.02)" }}
            />
            {/* Subtle overlay for text readability */}
            <Box
              position="absolute"
              inset={0}
              bgGradient="linear(to-r, rgba(0,0,0,0.1) 0%, transparent 50%)"
            />
          </Box>

          {/* Bottom Photo */}
          <Box
            flex={1}
            position="relative"
            overflow="hidden"
            borderRadius="md 0 0 0"
          >
            <Image
              src={photo2}
              alt="Russell Kaplan Auctioneers - Auction House"
              w="full"
              h="full"
              objectFit="cover"
              objectPosition="center"
              transition="transform 0.8s ease"
              _hover={{ transform: "scale(1.02)" }}
            />
            {/* Subtle overlay */}
            <Box
              position="absolute"
              inset={0}
              bgGradient="linear(to-r, rgba(0,0,0,0.1) 0%, transparent 50%)"
            />
          </Box>
        </Flex>

        {/* Floating Info Badge */}
        <Box
          position="absolute"
          bottom={8}
          left={8}
          bg="rgba(255,255,255,0.95)"
          backdropFilter="blur(10px)"
          p={6}
          borderRadius="md"
          boxShadow="0 8px 32px rgba(0,0,0,0.12)"
          borderLeft="3px solid"
          borderColor="brand.primary"
          maxW="280px"
        >
          <Text
            fontSize="11px"
            letterSpacing="0.16em"
            textTransform="uppercase"
            color="text.secondary"
            mb={2}
          >
            Current Exhibition
          </Text>
          <Text
            fontFamily="heading"
            fontSize="18px"
            fontWeight="medium"
            color="text.primary"
            lineHeight={1.2}
          >
            Contemporary South African Art
          </Text>
        </Box>
      </Box>

      {/* Mobile Photo Display */}
      <Box
        display={{ base: "block", lg: "none" }}
        mt={8}
        mx={4}
      >
        <Box
          position="relative"
          overflow="hidden"
          borderRadius="md"
          mb={3}
        >
          <Image
            src={photo1}
            alt="Russell Kaplan Auctioneers - Fine Art Collection"
            w="full"
            h="200px"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
        <Box
          position="relative"
          overflow="hidden"
          borderRadius="md"
        >
          <Image
            src={photo2}
            alt="Russell Kaplan Auctioneers - Auction House"
            w="full"
            h="200px"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
      </Box>
    </Grid>
  );
};
