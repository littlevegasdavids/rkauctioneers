import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import photo3 from "@/assets/photos/photo_3.jpg";

export const About = () => {
  return (
    <Box w="full">
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap={14}
        bg="bg.surface"
        w="full"
      >
        {/* About Visual */}
        <Box position="relative" h="500px" overflow="hidden" borderRadius="md">
          {/* Background Image */}
          <Image
            src={photo3}
            alt="Russell Kaplan Auctioneers - About Us"
            position="absolute"
            inset={0}
            w="100%"
            h="100%"
            objectFit="cover"
            objectPosition="center"
          />

          <Box
            position="absolute"
            bottom={9}
            right={-6}
            bg="brand.primary"
            p={7}
            shadow="lg"
            borderRadius="md"
          >
            <Text
              fontFamily="heading"
              fontSize="50px"
              fontWeight="light"
              color="text.on-brand"
              lineHeight={1}
            >
              Est.
            </Text>
            <Text
              fontFamily="heading"
              fontSize="50px"
              fontWeight="light"
              color="text.on-brand"
              lineHeight={1}
            >
              1984
            </Text>
            <Text
              fontSize="10.5px"
              letterSpacing="0.18em"
              textTransform="uppercase"
              color="text.on-brand"
              mt={2}
              opacity={0.7}
            >
              Ferndale, Randburg
            </Text>
          </Box>
        </Box>

        {/* About Content */}
        <Box>
          <HStack gap={3} mb={4}>
            <Box w="24px" h="1px" bg="brand.primary" />
            <Text
              fontSize="11px"
              letterSpacing="0.22em"
              textTransform="uppercase"
              color="text.secondary"
            >
              Our Story
            </Text>
          </HStack>
          <Heading
            fontFamily="heading"
            fontSize={{ base: "38px", lg: "52px" }}
            fontWeight="light"
            lineHeight={1.1}
            mb={6}
          >
            South Africa's Most
            <br />
            <Text as="em" fontStyle="italic" color="brand.hover">
              Trusted
            </Text>{" "}
            Auction House
          </Heading>
          <Text fontSize="15px" lineHeight={1.82} color="text.secondary" mb={4}>
            Russell Kaplan Auctioneers has been at the heart of South Africa's
            art and antique market for over 40 years. Founded in Johannesburg,
            we have earned a reputation for integrity, expertise, and
            exceptional results.
          </Text>
          <Text fontSize="15px" lineHeight={1.82} color="text.secondary" mb={8}>
            From our showroom at 256 Oak Avenue, Ferndale — our specialists
            curate each auction with meticulous attention to provenance, quality
            and market value, connecting buyers and sellers across the country.
          </Text>
          <SimpleGrid columns={2} gap={4}>
            {[
              "Fine Art & Paintings",
              "Jewellery & Watches",
              "Antiques & Furniture",
              "Ceramics & Glassware",
              "Silver & Collectables",
              "Design Objects",
            ].map((item, index) => (
              <Flex key={index} align="center" gap={3}>
                <Box w="6px" h="6px" bg="brand.primary" borderRadius="full" />
                <Text fontSize="13.5px" color="text.primary">
                  {item}
                </Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Box>
      </Grid>
    </Box>
  );
};
