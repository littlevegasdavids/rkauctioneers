import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  SimpleGrid,
  AspectRatio,
} from "@chakra-ui/react";

export const ShowRoom = () => {
  return (
    <Box bg="ink.800" py={25} px={{ base: 6, lg: 20 }}>
      <Flex justify="space-between" align="flex-start" mb={14}>
        <Box>
          <HStack gap={3} mb={4}>
            <Box w="24px" h="1px" bg="brand.primary" />
            <Text
              fontSize="11px"
              letterSpacing="0.22em"
              textTransform="uppercase"
              color="rgba(255,255,255,0.32)"
            >
              Visit Us
            </Text>
          </HStack>
          <Heading
            fontFamily="heading"
            fontSize={{ base: "36px", lg: "54px" }}
            fontWeight="light"
            lineHeight={1.1}
            color="white"
          >
            Our{" "}
            <Text as="em" fontStyle="italic" color="brand.primary">
              Showroom
            </Text>
          </Heading>
        </Box>
        <Text
          textAlign="right"
          fontSize="14px"
          color="rgba(255,255,255,0.38)"
          lineHeight={1.9}
        >
          256 Oak Avenue, Cnr Republic Road
          <br />
          Ferndale, Randburg 2194
          <br />
          Mon – Fri · 9:30 am – 4:30 pm
        </Text>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap="3px">
        {[
          {
            title: "Main Gallery",
            subtitle: "Fine Art & Paintings",
            bg: "linear(140deg, #504848, #282020)",
          },
          {
            title: "Jewellery Room",
            subtitle: "Watches, Gems & Precious Metals",
            bg: "linear(140deg, #404858, #202030)",
          },
          {
            title: "Furniture & Objects",
            subtitle: "Antiques, Design & Ceramics",
            bg: "linear(140deg, #485040, #202820)",
          },
        ].map((room, index) => (
          <AspectRatio key={index} ratio={4 / 3}>
            <Box
              position="relative"
              overflow="hidden"
              cursor="pointer"
              borderRadius="md"
              bgGradient={room.bg}
              _hover={{
                "& > .bg": { transform: "scale(1.05)" },
              }}
            >
              <Box
                className="bg"
                position="absolute"
                inset={0}
                transition="transform 0.5s ease"
              />
              <Flex
                position="absolute"
                inset={0}
                bgGradient="linear(to top, rgba(0,0,0,0.72), transparent)"
                align="flex-end"
                p={7}
              >
                <Box>
                  <Heading
                    fontFamily="heading"
                    fontSize="22px"
                    fontWeight="normal"
                    color="white"
                    lineHeight={1.2}
                    mb={1}
                  >
                    {room.title}
                  </Heading>
                  <Text
                    fontSize="12px"
                    color="rgba(255,255,255,0.5)"
                    letterSpacing="0.08em"
                  >
                    {room.subtitle}
                  </Text>
                </Box>
              </Flex>
            </Box>
          </AspectRatio>
        ))}
      </SimpleGrid>
    </Box>
  );
};
