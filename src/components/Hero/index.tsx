import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";

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
        bg="bg.page"
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
            // rightIcon={
            //   <Icon viewBox="0 0 14 14" w={4} h={4}>
            //     <path d="M3 7h8M8 4l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.6"/>
            //   </Icon>
            // }
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
              borderColor: "text.primary",
            }}
          >
            View Upcoming Sessions
          </Link>
        </HStack>
      </Flex>

      {/* Hero Right - Collage */}
      <Box position="relative" overflow="hidden">
        <Grid
          templateColumns="1fr 1fr"
          templateRows="1fr 1fr"
          gap="3px"
          position="absolute"
          inset={0}
        >
          <GridItem rowSpan={2} position="relative" overflow="hidden">
            <Box
              position="absolute"
              inset={0}
              bgGradient="linear(145deg, #4A4440 0%, #1E1A16 100%)"
              transition="transform 0.6s ease"
              _hover={{ transform: "scale(1.05)" }}
            />
            <Flex
              position="absolute"
              inset={0}
              align="center"
              justify="center"
              opacity={0.18}
            >
              <Icon viewBox="0 0 100 100" w="55%" h="55%" color="white">
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
                <line
                  x1="50"
                  y1="12"
                  x2="50"
                  y2="88"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
                <line
                  x1="12"
                  y1="50"
                  x2="88"
                  y2="50"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
              </Icon>
            </Flex>
            <Box
              position="absolute"
              inset={0}
              bgGradient="linear(to top, rgba(0,0,0,0.5) 0%, transparent 55%)"
            />
          </GridItem>

          <GridItem position="relative" overflow="hidden">
            <Box
              position="absolute"
              inset={0}
              bgGradient="linear(145deg, #3A4550 0%, #181E26 100%)"
              transition="transform 0.6s ease"
              _hover={{ transform: "scale(1.05)" }}
            />
            <Flex
              position="absolute"
              inset={0}
              align="center"
              justify="center"
              opacity={0.18}
            >
              <Icon viewBox="0 0 100 100" w="55%" h="55%" color="white">
                <rect
                  x="20"
                  y="20"
                  width="60"
                  height="60"
                  rx="2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
                <rect
                  x="35"
                  y="35"
                  width="30"
                  height="30"
                  fill="white"
                  opacity="0.3"
                />
              </Icon>
            </Flex>
            <Box
              position="absolute"
              inset={0}
              bgGradient="linear(to top, rgba(0,0,0,0.5) 0%, transparent 55%)"
            />
          </GridItem>

          <GridItem position="relative" overflow="hidden">
            <Box
              position="absolute"
              inset={0}
              bgGradient="linear(145deg, #484038 0%, #201A14 100%)"
              transition="transform 0.6s ease"
              _hover={{ transform: "scale(1.05)" }}
            />
            <Flex
              position="absolute"
              inset={0}
              align="center"
              justify="center"
              opacity={0.18}
            >
              <Icon viewBox="0 0 100 100" w="55%" h="55%" color="white">
                <polygon
                  points="50,15 85,80 15,80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
                <polygon
                  points="50,35 72,72 28,72"
                  fill="white"
                  opacity="0.2"
                />
              </Icon>
            </Flex>
            <Box
              position="absolute"
              inset={0}
              bgGradient="linear(to top, rgba(0,0,0,0.5) 0%, transparent 55%)"
            />
          </GridItem>
        </Grid>

        {/* Hero Tag */}
        <Box
          position="absolute"
          top={7}
          right={7}
          bg="rgba(255,255,255,0.92)"
          px={4}
          py={2}
          fontSize="10.5px"
          letterSpacing="0.14em"
          textTransform="uppercase"
          color="text.primary"
          borderLeft="2px solid"
          borderColor="brand.primary"
          borderRadius="0 md md 0"
        >
          Summer Wunderkammer · 2026
        </Box>

        {/* Hero Badge */}
        <Box
          position="absolute"
          bottom={12}
          left={-6}
          bg="bg.surface"
          p={6}
          boxShadow="0 8px 40px rgba(0,0,0,0.14)"
          borderLeft="3px solid"
          borderColor="brand.primary"
          minW="210px"
          borderRadius="0 md md 0"
        >
          <Text
            fontFamily="heading"
            fontSize="36px"
            fontWeight="medium"
            color="text.primary"
            lineHeight={1}
          >
            R360,000
          </Text>
          <Text
            fontSize="10.5px"
            letterSpacing="0.16em"
            textTransform="uppercase"
            color="text.secondary"
            mt={2}
          >
            Top Lot — Guy du Toit
          </Text>
        </Box>
      </Box>
    </Grid>
  );
};
