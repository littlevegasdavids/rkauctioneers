import { Hero, StatsBar, AuctionHighlights } from "@/components";
import { VStack, Box, Heading, Text, HStack } from "@chakra-ui/react";

export const HomePage = () => {
  return (
    <VStack gap="10" w="full">
      {/* Hero Section - Breaks out to full width */}
      <Hero />

      {/* Stats Bar */}
      <StatsBar />

      {/* Highlights Section */}
      <AuctionHighlights />

      {/* Location Section */}
      <Box w="full" py={8}>
        <VStack gap={6} align="center">
          <VStack gap={3} textAlign="center">
            <HStack gap={3}>
              <Box w="24px" h="1px" bg="brand.primary" />
              <Text
                fontSize="11px"
                letterSpacing="0.22em"
                textTransform="uppercase"
                color="text.secondary"
              >
                Visit Us
              </Text>
              <Box w="24px" h="1px" bg="brand.primary" />
            </HStack>
            <Heading
              fontFamily="heading"
              fontSize={{ base: "32px", lg: "42px" }}
              fontWeight="light"
              lineHeight={1.1}
              color="text.primary"
            >
              Our Showroom Location
            </Heading>
            <Text
              fontSize="15px"
              lineHeight={1.6}
              color="text.secondary"
              maxW="500px"
            >
              256 Oak Avenue, Ferndale, Randburg
            </Text>
          </VStack>

          <Box
            w="full"
            maxW="800px"
            h={{ base: "300px", md: "400px", lg: "450px" }}
            borderRadius="lg"
            overflow="hidden"
            shadow="xl"
            border="1px solid"
            borderColor="border.subtle"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.9755719806662!2d27.998285476191445!3d-26.099716077141178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95735802d06ad5%3A0xa8d474ffb29dbb35!2sRussell%20Kaplan%20Auctioneers!5e0!3m2!1sen!2sza!4v1775571860941!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </VStack>
      </Box>

      {/* Showroom Section */}
      {/* <ShowRoom /> */}

      {/* Contact Section */}
      {/* <Contact /> */}
    </VStack>
  );
};