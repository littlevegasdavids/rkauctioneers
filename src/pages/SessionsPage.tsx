import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Card,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { AUCTION_SESSIONS } from "@/constants";
import { RiAuctionFill } from "react-icons/ri";
import { FaCalendar } from "react-icons/fa";
import { AiOutlineNumber } from "react-icons/ai";

// Session Card Component
const SessionCard = ({
  session,
}: {
  session: (typeof AUCTION_SESSIONS)[0];
}) => {
  return (
    <Card.Root
      bg="white"
      borderWidth="1px"
      borderColor="gray.200"
      borderTopWidth="3px"
      borderTopColor="yellow.500"
      borderRadius="6px"
      overflow="hidden"
      cursor="pointer"
      transition="all 0.2s"
      _hover={{
        borderColor: "yellow.500",
        borderTopColor: "yellow.600",
        shadow: "0 4px 24px rgba(0,0,0,0.08)",
        transform: "translateY(-2px)",
      }}
      flex={{ base: "none", md: "1" }}
      w={{ base: "full", md: "auto" }}
      minW={{ base: "auto", md: "280px" }}
    >
      <Card.Body p={0}>
        <VStack align="stretch" gap={0}>
          {/* Card Header */}
          <HStack
            justify="space-between"
            align="flex-start"
            p={4.5}
            pb={3}
            gap={2}
          >
            <VStack align="flex-start" gap={0.5}>
              <Text
                fontSize="11px"
                letterSpacing="0.1em"
                textTransform="uppercase"
                color="gray.500"
                fontWeight="400"
              >
                Session
              </Text>
              <Text
                fontFamily="serif"
                fontSize="28px"
                fontWeight="300"
                color="yellow.700"
                lineHeight="1"
              >
                {String(session.session).padStart(2, "0")}
              </Text>
            </VStack>
          </HStack>

          {/* Date and Time Info - Made Bold and Prominent */}
          <VStack align="stretch" px={4.5} pb={3.5} gap={1}>
            <Text
              fontSize="16px"
              fontWeight="bold"
              color="gray.800"
              lineHeight="1.2"
            >
              {session.date}
            </Text>
            <Text fontSize="14px" fontWeight="semibold" color="gray.600">
              {session.time}
            </Text>
          </VStack>

          {/* Divider */}
          <Box h="1px" bg="gray.100" mx={4.5} />

          {/* Category */}
          <Box px={4.5} py={3.5} flex="1">
            <Text
              fontFamily="serif"
              fontSize="16px"
              fontWeight="400"
              color="gray.800"
              lineHeight="1.35"
            >
              {session.categories}
            </Text>
          </Box>

          {/* Footer */}
          <HStack
            justify="space-between"
            align="center"
            px={4.5}
            py={3}
            pt={3}
            gap={2}
          >
            <VStack align="flex-start" gap={0}>
              <Text fontSize="11px" color="gray.500" letterSpacing="0.06em">
                <Text as="span" color="gray.800" fontWeight="500">
                  {session.lots}
                </Text>
              </Text>
            </VStack>
            <HStack align="center" gap={1}>
              <Icon viewBox="0 0 11 11" w="11px" h="11px" color="yellow.700">
                <circle
                  cx="5.5"
                  cy="5.5"
                  r="4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M5.5 3v2.5l1.5 1"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </Icon>
              <Text fontSize="10.5px" color="gray.500" letterSpacing="0.04em">
                {session.approxRate}
              </Text>
            </HStack>
          </HStack>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
};

export const SessionsPage = () => {
  return (
    <VStack w="full" align="stretch" gap={0}>
      {/* Page Header */}
      <Box
        bg="white"
        borderBottomWidth="1px"
        borderColor="gray.100"
        px={{ base: 5, md: 20 }}
        py={{ base: 10, md: 14 }}
      >
        <VStack align="stretch" gap={4} maxW="1200px" mx="auto">
          <HStack align="center" gap={3}>
            <Box w="20px" h="1px" bg="yellow.500" />
            <Text
              fontSize="11px"
              letterSpacing="0.22em"
              textTransform="uppercase"
              color="gray.500"
            >
              Auction Calendar
            </Text>
          </HStack>

          <Heading
            fontFamily="serif"
            fontSize={{ base: "36px", md: "60px" }}
            fontWeight="300"
            lineHeight="1.0"
            color="gray.800"
            mb={3}
          >
            Sessions{" "}
            <Text as="em" fontStyle="italic" color="yellow.700">
              &amp; Times
            </Text>
          </Heading>

          <Text
            fontSize="15px"
            color="gray.500"
            lineHeight="1.7"
            maxW="560px"
            mb={9}
          >
            All sessions take place at our showroom — 256 Oak Avenue, Ferndale,
            Randburg — and are streamed live online. Register to bid in-room or
            from anywhere in the world.
          </Text>

          {/* Auction Meta */}
          <HStack wrap="wrap" gap={0}>
            <HStack gap={2} px={5} py={2.5} _first={{ pl: 0 }}>
              <Box color="brand.700">
                <RiAuctionFill />
              </Box>
              <Text fontSize="13px" color="gray.500">
                Auction
              </Text>
              <Text fontSize="13px" color="gray.800" fontWeight="500">
                Summer Wunderkammer 2026
              </Text>
            </HStack>

            <HStack gap={2} px={5} py={2.5}>
              <Box color="brand.700">
                <FaCalendar />
              </Box>
              <Text fontSize="13px" color="gray.500">
                Dates
              </Text>
              <Text fontSize="13px" color="gray.800" fontWeight="500">
                5 – 15 March 2026
              </Text>
            </HStack>

            <HStack gap={2} px={5} py={2.5}>
              <Box color="brand.700">
                <AiOutlineNumber />
              </Box>
              <Text fontSize="13px" color="gray.500">
                Sessions
              </Text>
              <Text fontSize="13px" color="gray.800" fontWeight="500">
                {AUCTION_SESSIONS.length} sessions
              </Text>
            </HStack>
          </HStack>
        </VStack>
      </Box>

      {/* Sessions Area */}
      <Box px={{ base: 5, md: 20 }} py={{ base: 10, md: 20 }}>
        <VStack align="stretch" gap={0} maxW="1200px" mx="auto">
          {/* Unified responsive layout using breakpoints */}
          <VStack align="stretch" gap={{ base: 4, md: 0 }}>
            {/* Desktop: Grid with row separators, Mobile: Simple list */}
            {Array.from(
              { length: Math.ceil(AUCTION_SESSIONS.length / 3) },
              (_, rowIndex) => (
                <VStack key={rowIndex} align="stretch" gap={0}>
                  <Flex
                    direction={{ base: "column", md: "row" }}
                    justify={{ base: "stretch", md: "space-between" }}
                    gap={4}
                    align="stretch"
                    mb={{ base: 0, md: 6 }}
                  >
                    {AUCTION_SESSIONS.slice(
                      rowIndex * 3,
                      (rowIndex + 1) * 3,
                    ).map((session) => (
                      <SessionCard key={session.session} session={session} />
                    ))}
                  </Flex>
                  {/* Row separator line - only show on desktop and if not the last row */}
                  {rowIndex < Math.ceil(AUCTION_SESSIONS.length / 3) - 1 && (
                    <Box
                      h="1px"
                      bg="gray.200"
                      mb={6}
                      display={{ base: "none", md: "block" }}
                    />
                  )}
                </VStack>
              ),
            )}
          </VStack>
        </VStack>
      </Box>
    </VStack>
  );
};
