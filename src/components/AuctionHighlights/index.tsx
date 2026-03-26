import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
  Badge,
  AspectRatio,
} from "@chakra-ui/react";

export const AuctionHighlights = () => {
  return (
    <Box bg="bg.page" py={25} px={{ base: 6, lg: 20 }}>
      <Flex justify="space-between" align="flex-end" mb={14}>
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
        <Link
          fontSize="12px"
          letterSpacing="0.13em"
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
          View All Results →
        </Link>
      </Flex>

      <Grid
        templateColumns={{ base: "1fr 1fr", md: "repeat(4, 1fr)" }}
        gap="3px"
      >
        {/* Large highlight card */}
        <GridItem colSpan={{ base: 2, md: 2 }} rowSpan={{ base: 1, md: 2 }}>
          <AspectRatio ratio={{ base: 1, md: 1 }}>
            <Box
              position="relative"
              overflow="hidden"
              cursor="pointer"
              borderRadius="md"
              bgGradient="linear(148deg, #4C4440 0%, #1E1A16 100%)"
              _hover={{
                "& > .bg": { transform: "scale(1.06)" },
                "& > .info": { transform: "translateY(0)" },
              }}
            >
              <Box
                className="bg"
                position="absolute"
                inset={0}
                transition="transform 0.55s ease"
              />
              <Flex
                position="absolute"
                inset={0}
                align="center"
                justify="center"
                opacity={0.13}
              >
                <Icon viewBox="0 0 100 100" w="50%" h="50%" color="white">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.6"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.6"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.6"
                  />
                </Icon>
              </Flex>
              <Box
                className="info"
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                p={6}
                bgGradient="linear(to top, rgba(0,0,0,0.82) 0%, transparent 100%)"
                transform="translateY(4px)"
                transition="transform 0.3s ease"
              >
                <Text
                  fontFamily="heading"
                  fontSize="22px"
                  fontWeight="normal"
                  color="white"
                  lineHeight={1.3}
                  mb={2}
                >
                  Guy du Toit — Dancing in the Moonlight
                </Text>
                <Badge
                  bg="brand.primary"
                  color="text.on-brand"
                  fontSize="10.5px"
                  fontWeight="medium"
                  letterSpacing="0.12em"
                  textTransform="uppercase"
                  px={3}
                  py={1}
                  borderRadius="sm"
                >
                  Sold R360,000
                </Badge>
              </Box>
            </Box>
          </AspectRatio>
        </GridItem>

        {/* Regular highlight cards */}
        {[
          {
            name: "Ladies Rolex Oyster Perpetual DateJust",
            price: "R260,000",
            gradient: "linear(148deg, #38485A 0%, #182030 100%)",
            icon: "rect",
          },
          {
            name: "Wallace Sterling Silver Cutlery Set",
            price: "R260,000",
            gradient: "linear(148deg, #4A4034 0%, #22180E 100%)",
            icon: "triangle",
          },
          {
            name: "Keith Calder — Klipspringers",
            price: "R300,000",
            gradient: "linear(148deg, #384858 0%, #182028 100%)",
            icon: "ellipse",
          },
          {
            name: "Keith Alexander — House in the Dunes",
            price: "R250,000",
            gradient: "linear(148deg, #463C30 0%, #1E1610 100%)",
            icon: "circles",
          },
          {
            name: "Mies van der Rohe Barcelona Daybed",
            price: "R130,000",
            gradient: "linear(148deg, #3A4858 0%, #181E28 100%)",
            icon: "cross",
          },
          {
            name: "Gents Rolex Yacht Master Wristwatch",
            price: "R200,000",
            gradient: "linear(148deg, #403830 0%, #1C1410 100%)",
            icon: "wave",
          },
        ].map((item, index) => (
          <GridItem key={index}>
            <AspectRatio ratio={1}>
              <Box
                position="relative"
                overflow="hidden"
                cursor="pointer"
                borderRadius="md"
                bgGradient={item.gradient}
                _hover={{
                  "& > .bg": { transform: "scale(1.06)" },
                  "& > .info": { transform: "translateY(0)" },
                }}
              >
                <Box
                  className="bg"
                  position="absolute"
                  inset={0}
                  transition="transform 0.55s ease"
                />
                <Flex
                  position="absolute"
                  inset={0}
                  align="center"
                  justify="center"
                  opacity={0.13}
                >
                  <Icon viewBox="0 0 100 100" w="50%" h="50%" color="white">
                    {item.icon === "rect" && (
                      <>
                        <rect
                          x="20"
                          y="20"
                          width="60"
                          height="60"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="0.7"
                        />
                        <rect
                          x="35"
                          y="35"
                          width="30"
                          height="30"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="0.7"
                        />
                      </>
                    )}
                    {item.icon === "triangle" && (
                      <polygon
                        points="50,10 90,80 10,80"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.7"
                      />
                    )}
                    {item.icon === "ellipse" && (
                      <>
                        <ellipse
                          cx="50"
                          cy="50"
                          rx="40"
                          ry="25"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="0.7"
                        />
                        <ellipse
                          cx="50"
                          cy="50"
                          rx="22"
                          ry="14"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="0.7"
                        />
                      </>
                    )}
                    {item.icon === "circles" && (
                      <>
                        <circle
                          cx="30"
                          cy="50"
                          r="18"
                          fill="white"
                          opacity="0.5"
                        />
                        <circle
                          cx="70"
                          cy="50"
                          r="18"
                          fill="white"
                          opacity="0.5"
                        />
                      </>
                    )}
                    {item.icon === "cross" && (
                      <>
                        <line
                          x1="10"
                          y1="10"
                          x2="90"
                          y2="90"
                          stroke="currentColor"
                          strokeWidth="0.7"
                        />
                        <line
                          x1="90"
                          y1="10"
                          x2="10"
                          y2="90"
                          stroke="currentColor"
                          strokeWidth="0.7"
                        />
                        <rect
                          x="30"
                          y="30"
                          width="40"
                          height="40"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="0.7"
                        />
                      </>
                    )}
                    {item.icon === "wave" && (
                      <path
                        d="M20,50 Q50,10 80,50 Q50,90 20,50z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.7"
                      />
                    )}
                  </Icon>
                </Flex>
                <Box
                  className="info"
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  p={5}
                  bgGradient="linear(to top, rgba(0,0,0,0.82) 0%, transparent 100%)"
                  transform="translateY(4px)"
                  transition="transform 0.3s ease"
                >
                  <Text
                    fontFamily="heading"
                    fontSize="15px"
                    fontWeight="normal"
                    color="white"
                    lineHeight={1.3}
                    mb={2}
                  >
                    {item.name}
                  </Text>
                  <Badge
                    bg="brand.primary"
                    color="text.on-brand"
                    fontSize="10.5px"
                    fontWeight="medium"
                    letterSpacing="0.12em"
                    textTransform="uppercase"
                    px={3}
                    py={1}
                    borderRadius="sm"
                  >
                    Sold {item.price}
                  </Badge>
                </Box>
              </Box>
            </AspectRatio>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
