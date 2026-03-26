import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
  Textarea,
} from "@chakra-ui/react";

export const Contact = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      gap={20}
      bg="bg.page"
      py={25}
      px={{ base: 6, lg: 20 }}
    >
      {/* Contact Left */}
      <Box>
        <HStack gap={3} mb={4}>
          <Box w="24px" h="1px" bg="brand.primary" />
          <Text
            fontSize="11px"
            letterSpacing="0.22em"
            textTransform="uppercase"
            color="text.secondary"
          >
            Get in Touch
          </Text>
        </HStack>
        <Heading
          fontFamily="heading"
          fontSize={{ base: "38px", lg: "52px" }}
          fontWeight="light"
          lineHeight={1.1}
          mb={7}
        >
          We'd Love to
          <br />
          <Text as="em" fontStyle="italic" color="brand.hover">
            Hear
          </Text>{" "}
          From You
        </Heading>
        <Text fontSize="15px" lineHeight={1.8} color="text.secondary" mb={10}>
          Whether you have items to sell, a collection to value, or simply want
          to know more about upcoming auctions — our team is here to help.
        </Text>

        <VStack gap={0}>
          {[
            {
              icon: (
                <Icon viewBox="0 0 16 16" w={4} h={4} color="text.secondary">
                  <path
                    d="M2 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M2 4l6 5 6-5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                </Icon>
              ),
              label: "Email",
              value: "admin@rkauctioneers.co.za",
            },
            {
              icon: (
                <Icon viewBox="0 0 16 16" w={4} h={4} color="text.secondary">
                  <path
                    d="M3 2h3l1.5 3.5-1.5 1a9 9 0 0 0 3.5 3.5l1-1.5L14 10v3a1 1 0 0 1-1 1C6.5 14 2 9.5 2 3a1 1 0 0 1 1-1z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                </Icon>
              ),
              label: "Phone",
              value: "+27 11 789 7422",
            },
            {
              icon: (
                <Icon viewBox="0 0 16 16" w={4} h={4} color="text.secondary">
                  <path
                    d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.75 4.5 8.5 4.5 8.5S12.5 9.75 12.5 6c0-2.5-2-4.5-4.5-4.5z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                  <circle
                    cx="8"
                    cy="6"
                    r="1.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                </Icon>
              ),
              label: "Showroom",
              value:
                "256 Oak Avenue, Cnr Republic Road\nFerndale, Randburg 2194",
            },
            {
              icon: (
                <Icon viewBox="0 0 16 16" w={4} h={4} color="text.secondary">
                  <rect
                    x="2"
                    y="3"
                    width="12"
                    height="11"
                    rx="1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M5 2v2M11 2v2M2 7h12"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                </Icon>
              ),
              label: "Opening Hours",
              value: "Monday – Friday: 9:30 am – 4:30 pm",
            },
          ].map((contact, index) => (
            <Flex
              key={index}
              align="flex-start"
              gap={5}
              py={5}
              borderBottom="1px solid"
              borderColor="border.subtle"
              w="full"
              _first={{
                borderTop: "1px solid",
                borderTopColor: "border.subtle",
              }}
            >
              <Flex
                w="38px"
                h="38px"
                border="1px solid"
                borderColor="border.subtle"
                align="center"
                justify="center"
                borderRadius="md"
                bg="bg.surface"
              >
                {contact.icon}
              </Flex>
              <Box>
                <Text
                  fontSize="10.5px"
                  letterSpacing="0.16em"
                  textTransform="uppercase"
                  color="text.secondary"
                  mb={1}
                >
                  {contact.label}
                </Text>
                <Text
                  fontSize="15px"
                  color="text.primary"
                  lineHeight={1.55}
                  whiteSpace="pre-line"
                >
                  {contact.value}
                </Text>
              </Box>
            </Flex>
          ))}
        </VStack>
      </Box>

      {/* Contact Form */}
      <Box>
        <Heading
          fontFamily="heading"
          fontSize="30px"
          fontWeight="normal"
          mb={8}
        >
          Send an Enquiry
        </Heading>
        <VStack gap={5}>
          <HStack gap={4} w="full">
            <Box>
              <Text
                fontSize="10.5px"
                letterSpacing="0.15em"
                textTransform="uppercase"
                color="text.secondary"
                mb={2}
              >
                First Name
              </Text>
              <Input
                placeholder="Jane"
                bg="bg.surface"
                border="1px solid"
                borderColor="rgba(26,26,26,0.12)"
                borderRadius="md"
                fontSize="14px"
                color="text.primary"
                _focus={{
                  borderColor: "brand.primary",
                  boxShadow: "0 0 0 3px rgba(249,176,0,0.12)",
                }}
              />
            </Box>
            <Box>
              <Text
                fontSize="10.5px"
                letterSpacing="0.15em"
                textTransform="uppercase"
                color="text.secondary"
                mb={2}
              >
                Last Name
              </Text>
              <Input
                placeholder="Smith"
                bg="bg.surface"
                border="1px solid"
                borderColor="rgba(26,26,26,0.12)"
                borderRadius="md"
                fontSize="14px"
                color="text.primary"
                _focus={{
                  borderColor: "brand.primary",
                  boxShadow: "0 0 0 3px rgba(249,176,0,0.12)",
                }}
              />
            </Box>
          </HStack>
          <Box>
            <Text
              fontSize="10.5px"
              letterSpacing="0.15em"
              textTransform="uppercase"
              color="text.secondary"
              mb={2}
            >
              Email Address
            </Text>
            <Input
              type="email"
              placeholder="jane@example.com"
              bg="bg.surface"
              border="1px solid"
              borderColor="rgba(26,26,26,0.12)"
              borderRadius="md"
              fontSize="14px"
              color="text.primary"
              _focus={{
                borderColor: "brand.primary",
                boxShadow: "0 0 0 3px rgba(249,176,0,0.12)",
              }}
            />
          </Box>
          <Box>
            <Text
              fontSize="10.5px"
              letterSpacing="0.15em"
              textTransform="uppercase"
              color="text.secondary"
              mb={2}
            >
              Enquiry Type
            </Text>
            {/* <Select
                placeholder="Select a topic…"
                bg="bg.surface"
                border="1px solid"
                borderColor="rgba(26,26,26,0.12)"
                borderRadius="md"
                fontSize="14px"
                color="text.primary"
                _focus={{
                  borderColor: 'brand.primary',
                  boxShadow: '0 0 0 3px rgba(249,176,0,0.12)',
                }}
              >
                <option>Selling / Consignment</option>
                <option>Item Valuation</option>
                <option>Buying / Bidding</option>
                <option>General Question</option>
              </Select> */}
          </Box>
          <Box>
            <Text
              fontSize="10.5px"
              letterSpacing="0.15em"
              textTransform="uppercase"
              color="text.secondary"
              mb={2}
            >
              Message
            </Text>
            <Textarea
              placeholder="Tell us about your item or enquiry…"
              bg="bg.surface"
              border="1px solid"
              borderColor="rgba(26,26,26,0.12)"
              borderRadius="md"
              fontSize="14px"
              color="text.primary"
              minH="110px"
              resize="vertical"
              _focus={{
                borderColor: "brand.primary",
                boxShadow: "0 0 0 3px rgba(249,176,0,0.12)",
              }}
            />
          </Box>
          <Button
            w="full"
            bg="text.primary"
            color="bg.surface"
            fontSize="12px"
            fontWeight="medium"
            letterSpacing="0.14em"
            textTransform="uppercase"
            py={4}
            borderRadius="md"
            _hover={{ bg: "ink.700" }}
          >
            Send Message →
          </Button>
        </VStack>
      </Box>
    </Grid>
  );
};
