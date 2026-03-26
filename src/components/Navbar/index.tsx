import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Text,
  VStack,
  Container,
} from "@chakra-ui/react";

export const NavBar = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      h="72px"
      bg="bg.surface"
      borderBottom="1px solid"
      borderColor="border.subtle"
    >
      <Container maxW="container.xl" h="full">
        <Flex align="center" justify="space-between" h="full">
          {/* Logo */}
          <VStack gap={0} align="start">
            <Text
              fontFamily="heading"
              fontSize="19px"
              fontWeight="medium"
              letterSpacing="0.04em"
              color="text.primary"
              lineHeight={1}
            >
              Russell Kaplan
            </Text>
            <Text
              fontFamily="body"
              fontSize="9px"
              letterSpacing="0.24em"
              textTransform="uppercase"
              color="text.secondary"
              lineHeight={1}
            >
              Auctioneers
            </Text>
          </VStack>

          {/* Navigation Links */}
          <HStack gap={0} display={{ base: "none", md: "flex" }}>
            <Link
              px={4}
              fontSize="12px"
              letterSpacing="0.13em"
              textTransform="uppercase"
              color="brand.hover"
              fontWeight="medium"
            >
              Home
            </Link>
            <Link
              px={4}
              fontSize="12px"
              letterSpacing="0.13em"
              textTransform="uppercase"
              color="text.secondary"
              _hover={{ color: "text.primary" }}
            >
              Sessions & Times
            </Link>
            <Link
              px={4}
              fontSize="12px"
              letterSpacing="0.13em"
              textTransform="uppercase"
              color="text.secondary"
              _hover={{ color: "text.primary" }}
            >
              Valuations
            </Link>
            <Link
              px={4}
              fontSize="12px"
              letterSpacing="0.13em"
              textTransform="uppercase"
              color="text.secondary"
              _hover={{ color: "text.primary" }}
            >
              About
            </Link>
            <Link
              px={4}
              fontSize="12px"
              letterSpacing="0.13em"
              textTransform="uppercase"
              color="text.secondary"
              _hover={{ color: "text.primary" }}
            >
              Contact
            </Link>
          </HStack>

          {/* CTA */}
          <HStack gap={5}>
            <Text
              fontSize="12px"
              color="text.secondary"
              letterSpacing="0.04em"
              display={{ base: "none", lg: "block" }}
            >
              +27 11 789 7422
            </Text>
            <Button
              bg="brand.primary"
              color="text.on-brand"
              fontSize="11.5px"
              fontWeight="medium"
              letterSpacing="0.13em"
              textTransform="uppercase"
              px={6}
              py={3}
              borderRadius="md"
              _hover={{
                bg: "brand.hover",
                transform: "translateY(-1px)",
              }}
              // leftIcon={
              //   <Icon viewBox="0 0 12 12" w={3} h={3}>
              //     <circle cx="6" cy="6" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.6"/>
              //     <path d="M6 3.5v2.5l1.5 1.5" fill="none" stroke="currentColor" strokeWidth="1.6"/>
              //   </Icon>
              // }
            >
              Register to Bid
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
