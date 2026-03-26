import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
  Separator,
} from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      bg="ink.900"
      color="rgba(255,255,255,0.38)"
      py={10}
      px={{ base: 6, lg: 20 }}
    >
      <Grid
        templateColumns={{ base: "1fr", md: "2fr 1fr 1fr 1fr" }}
        gap={{ base: 9, md: 13 }}
        mb={12}
      >
        {/* Brand Column */}
        <Box>
          <Text
            fontFamily="heading"
            fontSize="21px"
            fontWeight="light"
            color="white"
            mb={1}
          >
            Russell Kaplan Auctioneers
          </Text>
          <Text
            fontSize="9.5px"
            letterSpacing="0.22em"
            textTransform="uppercase"
            color="rgba(255,255,255,0.28)"
            mb={5}
          >
            Art & Antique Auctions · Est. 1984
          </Text>
          <Text
            fontSize="13px"
            lineHeight={1.75}
            color="rgba(255,255,255,0.33)"
            maxW="280px"
            mb={7}
          >
            Connecting collectors, sellers and the curious for over 40 years.
            Based in Ferndale, Johannesburg, South Africa.
          </Text>
          <HStack gap={3}>
            {[
              {
                icon: (
                  <Icon viewBox="0 0 14 14" w={3} h={3} fill="currentColor">
                    <path d="M7.8 14V7.8h2l.3-2.3H7.8V4c0-.7.2-1.1 1.2-1.1H10V1C9.7 1 8.9.9 8 .9 6.2.9 5 2 5 4.2v1.3H3V7.8h2V14h2.8z" />
                  </Icon>
                ),
                href: "https://www.facebook.com/rkauctioneers/",
                title: "Facebook",
              },
              {
                icon: (
                  <Icon
                    viewBox="0 0 14 14"
                    w={3}
                    h={3}
                    color="rgba(255,255,255,0.4)"
                  >
                    <rect
                      x="1.5"
                      y="1.5"
                      width="11"
                      height="11"
                      rx="2.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <circle
                      cx="7"
                      cy="7"
                      r="2.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <circle cx="10.5" cy="3.5" r="0.5" fill="currentColor" />
                  </Icon>
                ),
                href: "https://www.instagram.com/russellkaplanauctioneers/",
                title: "Instagram",
              },
              {
                icon: (
                  <Icon viewBox="0 0 14 14" w={3} h={3} fill="currentColor">
                    <path d="M12.5 4s-.2-1-1-1.3C10.8 2.4 7 2.4 7 2.4s-3.8 0-4.5.3C1.7 3 1.5 4 1.5 4S1.3 5.1 1.3 6.3v1.1c0 1.2.2 2.3.2 2.3s.2 1 1 1.3c.7.3 4.5.3 4.5.3s3.8 0 4.5-.3c.8-.3 1-.7 1-1.3 0 0 .2-1.1.2-2.3v-1C12.7 5.1 12.5 4 12.5 4zM5.8 8.8V4.9L9.2 7 5.8 8.8z" />
                  </Icon>
                ),
                href: "http://www.youtube.com/@RussellKaplanAuctioneers",
                title: "YouTube",
              },
              {
                icon: (
                  <Icon viewBox="0 0 14 14" w={3} h={3} fill="currentColor">
                    <path d="M7 1C3.7 1 1 3.7 1 7c0 1.1.3 2.1.8 3L1 13l3.1-.8c.9.5 1.9.8 3 .8C10.3 13 13 10.3 13 7S10.3 1 7 1zm3.2 8.7c-.1.4-.8.7-1.1.8-.3 0-.6.1-.9 0-.2 0-.5-.1-.9-.3-1.6-.7-2.6-2.3-2.7-2.4-.1-.1-.6-.9-.6-1.7 0-.8.4-1.2.6-1.3.2-.2.4-.2.5-.2h.4c.1 0 .3 0 .4.3.1.3.5 1.1.5 1.2.1.1.1.2 0 .3-.1.1-.1.2-.2.3-.1.1-.2.2-.1.3.1.2.4.7.9 1.1.6.5 1.1.7 1.2.7.1.1.2.1.3 0 .1-.1.4-.5.5-.6.1-.2.2-.1.4-.1.2.1 1.1.5 1.3.6.2.1.3.1.3.3.1.2 0 .7-.2 1.1z" />
                  </Icon>
                ),
                href: "https://api.whatsapp.com/message/MMTJPEYF2UHAN1",
                title: "WhatsApp",
              },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                w="35px"
                h="35px"
                border="1px solid"
                borderColor="rgba(255,255,255,0.1)"
                borderRadius="full"
                display="flex"
                //align="center"
                //justify="center"
                _hover={{
                  borderColor: "brand.primary",
                  bg: "rgba(249,176,0,0.08)",
                }}
                title={social.title}
              >
                {social.icon}
              </Link>
            ))}
          </HStack>
        </Box>

        {/* Navigate Column */}
        <Box>
          <Text
            fontSize="10.5px"
            letterSpacing="0.2em"
            textTransform="uppercase"
            color="rgba(255,255,255,0.55)"
            mb={5}
          >
            Navigate
          </Text>
          <VStack align="start" gap={3}>
            {[
              "Home",
              "Sessions & Times",
              "Valuations",
              "About RKA",
              "Contact",
            ].map((item, index) => (
              <Link
                key={index}
                fontSize="13.5px"
                color="rgba(255,255,255,0.33)"
                _hover={{ color: "rgba(255,255,255,0.75)" }}
              >
                {item}
              </Link>
            ))}
          </VStack>
        </Box>

        {/* Auctions Column */}
        <Box>
          <Text
            fontSize="10.5px"
            letterSpacing="0.2em"
            textTransform="uppercase"
            color="rgba(255,255,255,0.55)"
            mb={5}
          >
            Auctions
          </Text>
          <VStack align="start" gap={3}>
            {[
              "Current Auction",
              "Past Results",
              "Register to Bid",
              "Consign a Lot",
              "Showroom Gallery",
            ].map((item, index) => (
              <Link
                key={index}
                fontSize="13.5px"
                color="rgba(255,255,255,0.33)"
                _hover={{ color: "rgba(255,255,255,0.75)" }}
              >
                {item}
              </Link>
            ))}
          </VStack>
        </Box>

        {/* Get the App Column */}
        <Box>
          <Text
            fontSize="10.5px"
            letterSpacing="0.2em"
            textTransform="uppercase"
            color="rgba(255,255,255,0.55)"
            mb={5}
          >
            Get the App
          </Text>
          <VStack align="start" gap={3} mb={6}>
            {["App Store (iOS)", "Google Play"].map((item, index) => (
              <Link
                key={index}
                fontSize="13.5px"
                color="rgba(255,255,255,0.33)"
                _hover={{ color: "rgba(255,255,255,0.75)" }}
              >
                {item}
              </Link>
            ))}
          </VStack>
          <Box>
            <Text
              fontSize="10.5px"
              letterSpacing="0.16em"
              textTransform="uppercase"
              color="rgba(255,255,255,0.22)"
              mb={3}
            >
              Bid Live Online
            </Text>
            <Button
              bg="brand.primary"
              color="text.on-brand"
              fontSize="11.5px"
              fontWeight="medium"
              letterSpacing="0.12em"
              textTransform="uppercase"
              px={5}
              py={3}
              borderRadius="md"
              _hover={{ bg: "brand.hover" }}
            >
              Register to Bid →
            </Button>
          </Box>
        </Box>
      </Grid>

      <Separator borderColor="rgba(255,255,255,0.06)" mb={7} />
      <Flex
        justify="space-between"
        align="center"
        direction={{ base: "column", md: "row" }}
        gap={4}
      >
        <Text fontSize="12px">
          &copy; 2026 Russell Kaplan Auctioneers. All rights reserved.
        </Text>
        <Text fontSize="12px" color="rgba(249,176,0,0.7)">
          256 Oak Avenue, Cnr Republic Road, Ferndale, Randburg
        </Text>
      </Flex>
    </Box>
  );
};
