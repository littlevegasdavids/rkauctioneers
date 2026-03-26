import {
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  Link,
  Text,
  VStack,
  Badge,
} from "@chakra-ui/react";

export const ServicesSection = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      bg="bg.raised"
      w="full"
      shadow="lg"
    >
      {/* Sessions Panel */}
      <Box
        p={20}
        position="relative"
        borderRight={{ lg: "1px solid" }}
        borderColor="border.subtle"
      >
        <Text
          fontFamily="heading"
          fontSize="80px"
          fontWeight="light"
          color="rgba(26,26,26,0.07)"
          lineHeight={1}
          position="absolute"
          top={9}
          right={11}
        >
          01
        </Text>
        <Flex
          w="46px"
          h="46px"
          border="1px solid"
          borderColor="brand.primary"
          borderRadius="full"
          align="center"
          justify="center"
          mb={7}
        >
          <Icon viewBox="0 0 20 20" w={5} h={5} color="brand.hover">
            <rect
              x="2"
              y="3"
              width="16"
              height="15"
              rx="1.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
            />
            <path
              d="M6 2v2M14 2v2M2 8h16"
              stroke="currentColor"
              strokeWidth="1.3"
            />
          </Icon>
        </Flex>
        <Heading
          fontFamily="heading"
          fontSize="34px"
          fontWeight="normal"
          mb={4}
          lineHeight={1.15}
        >
          Auction Sessions
          <br />& Times
        </Heading>
        <Text
          fontSize="15px"
          lineHeight={1.75}
          color="text.secondary"
          mb={8}
          maxW="380px"
        >
          Our signature Wunderkammer Auctions are held six times per year,
          combining fine art, antiques, jewellery, furniture and collectables in
          one curated live event — open to all.
        </Text>
        <VStack gap={3} mb={8}>
          {[
            {
              season: "Spring",
              time: "September / October",
              tag: "Live + Online",
              active: false,
            },
            {
              season: "Summer",
              time: "November / December",
              tag: "Live + Online",
              active: false,
            },
            {
              season: "Autumn",
              time: "April / May",
              tag: "Open Now",
              active: true,
            },
            {
              season: "Winter",
              time: "June / July",
              tag: "Coming Soon",
              active: false,
            },
          ].map((item, index) => (
            <Flex
              key={index}
              align="center"
              gap={4}
              py={3}
              px={4}
              bg="bg.surface"
              borderLeft="2px solid"
              borderColor="brand.primary"
              borderRadius="0 md md 0"
              w="full"
            >
              <Text
                fontSize="12px"
                fontWeight="medium"
                letterSpacing="0.08em"
                textTransform="uppercase"
                color="text.primary"
                minW="66px"
              >
                {item.season}
              </Text>
              <Text fontSize="13px" color="text.secondary">
                {item.time}
              </Text>
              <Badge
                ml="auto"
                bg={item.active ? "#E8F5EC" : "brand.subtle"}
                color={item.active ? "#2E7D47" : "brand.hover"}
                fontSize="10px"
                fontWeight="medium"
                letterSpacing="0.1em"
                textTransform="uppercase"
                px={2}
                py={1}
                borderRadius="sm"
              >
                {item.tag}
              </Badge>
            </Flex>
          ))}
        </VStack>
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
          View Full Calendar
        </Link>
      </Box>

      {/* Valuations Panel */}
      <Box p={20} position="relative">
        <Text
          fontFamily="heading"
          fontSize="80px"
          fontWeight="light"
          color="rgba(26,26,26,0.07)"
          lineHeight={1}
          position="absolute"
          top={9}
          right={11}
        >
          02
        </Text>
        <Flex
          w="46px"
          h="46px"
          border="1px solid"
          borderColor="brand.primary"
          borderRadius="full"
          align="center"
          justify="center"
          mb={7}
        >
          <Icon viewBox="0 0 20 20" w={5} h={5} color="brand.hover">
            <path
              d="M10 2a8 8 0 1 0 0 16A8 8 0 0 0 10 2z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
            />
            <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.3" />
          </Icon>
        </Flex>
        <Heading
          fontFamily="heading"
          fontSize="34px"
          fontWeight="normal"
          mb={4}
          lineHeight={1.15}
        >
          Item
          <br />
          Valuations
        </Heading>
        <Text
          fontSize="15px"
          lineHeight={1.75}
          color="text.secondary"
          mb={8}
          maxW="380px"
        >
          Our specialist team offers professional valuations for art, antiques,
          jewellery, furniture and collectables — whether you are looking to
          sell, insure, or simply understand what you own.
        </Text>
        <VStack gap={3} mb={8}>
          {[
            {
              type: "Showroom",
              info: "Mon – Fri · 9:30 am – 4:30 pm",
              tag: "Walk-in",
              active: false,
            },
            {
              type: "Online",
              info: "Submit photos via enquiry form",
              tag: "Free",
              active: false,
            },
            {
              type: "Autumn",
              info: "Consignments close 10 April",
              tag: "Booking Open",
              active: true,
            },
          ].map((item, index) => (
            <Flex
              key={index}
              align="center"
              gap={4}
              py={3}
              px={4}
              bg="bg.surface"
              borderLeft="2px solid"
              borderColor="brand.primary"
              borderRadius="0 md md 0"
              w="full"
            >
              <Text
                fontSize="12px"
                fontWeight="medium"
                letterSpacing="0.08em"
                textTransform="uppercase"
                color="text.primary"
                minW="66px"
              >
                {item.type}
              </Text>
              <Text fontSize="13px" color="text.secondary">
                {item.info}
              </Text>
              <Badge
                ml="auto"
                bg={item.active ? "#E8F5EC" : "brand.subtle"}
                color={item.active ? "#2E7D47" : "brand.hover"}
                fontSize="10px"
                fontWeight="medium"
                letterSpacing="0.1em"
                textTransform="uppercase"
                px={2}
                py={1}
                borderRadius="sm"
              >
                {item.tag}
              </Badge>
            </Flex>
          ))}
        </VStack>
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
          Request a Valuation
        </Link>
      </Box>
    </Grid>
  );
};
