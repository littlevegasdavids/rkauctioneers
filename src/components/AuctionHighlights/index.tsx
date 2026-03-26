import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  Badge,
  Image,
} from "@chakra-ui/react";
import { AUCTION_HIGHLIGHTS } from "../../constants";

export const AuctionHighlights = () => {
  return (
    <Flex direction="column" gap={8} p={12} bg="bg.page" shadow="md" border="1px solid" borderColor="neutral.100">
      <Flex justify="space-between" align="flex-end">
        <Box>
          <HStack gap={3} mb={4}>
            <Box w="24px" h="1px" bg="brand.primary" />
            <Text
              fontSize="11px"
              letterSpacing="0.22em"
              textTransform="uppercase"
              color="text.secondary"
            >
              Past Results
            </Text>
          </HStack>
          <Heading
            fontFamily="heading"
            fontSize={{ base: "36px", lg: "54px" }}
            fontWeight="light"
            lineHeight={1.1}
            color="text.primary"
          >
            Auction{" "}
            <Text as="em" fontStyle="italic" color="brand.hover">
              Highlights
            </Text>
          </Heading>
        </Box>
      </Flex>

      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(5, 1fr)",
        }}
        gap={6}
        justifyItems="start"
      >
        {AUCTION_HIGHLIGHTS.map((item) => (
          <GridItem key={item.id} w="100%" maxW="280px">
            <Box
              bg="white"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="0 4px 20px rgba(0,0,0,0.08)"
              border="1px solid"
              borderColor="gray.100"
              cursor="pointer"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                "& .image": { transform: "scale(1.03)" },
              }}
            >
              {/* Image Section */}
              <Box position="relative" overflow="hidden" bg="gray.50" h="240px">
                <Image
                  className="image"
                  src={item.image}
                  alt={item.title}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  objectPosition="center"
                  transition="transform 0.4s ease"
                />
              </Box>

              {/* Content Section */}
              <Box p={5}>
                <Text
                  fontFamily="heading"
                  fontSize="16px"
                  fontWeight="medium"
                  color="gray.800"
                  lineHeight={1.4}
                  mb={3}
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                >
                  {item.title}
                </Text>
                <Badge
                  bg="brand.primary"
                  color="white"
                  fontSize="11px"
                  fontWeight="semibold"
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                  px={3}
                  py={1.5}
                  borderRadius="md"
                >
                  Sold {item.amount}
                </Badge>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};
