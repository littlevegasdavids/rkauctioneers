import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  Container,
} from "@chakra-ui/react";
import Logo from "@/assets/logo/logo.avif";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  const currentPage = window.location.pathname.split("/")[2];

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
            <Image
              src={Logo}
              alt="Russell Kaplan Auctioneers"
              h="50px"
              objectFit="contain"
            />
          </VStack>

          {/* Navigation Links */}
          <HStack gap={0} display={{ base: "none", md: "flex" }}>
            <Text
              px={4}
              fontSize="12px"
              letterSpacing="0.13em"
              textTransform="uppercase"
              color={currentPage === "" ? "brand.hover" : "text.secondary"}
              fontWeight={currentPage === "" ? "bold" : "normal"}
              _hover={{ color: "text.primary" }}
              onClick={() => {
                navigate("/rkauctioneers/");
              }}
              cursor="pointer"
            >
              Home
            </Text>
            <Text
              px={4}
              fontSize="12px"
              letterSpacing="0.13em"
              textTransform="uppercase"
              color={
                currentPage === "valuations" ? "brand.hover" : "text.secondary"
              }
              fontWeight={currentPage === "valuations" ? "bold" : "normal"}
              _hover={{ color: "text.primary", textDecoration: "underline" }}
              onClick={() => {
                navigate("/rkauctioneers/valuations");
              }}
              cursor="pointer"
            >
              Valuations
            </Text>
            <Text
              px={4}
              fontSize="12px"
              letterSpacing="0.13em"
              textTransform="uppercase"
              color={
                currentPage === "sessions" ? "brand.hover" : "text.secondary"
              }
              fontWeight={currentPage === "sessions" ? "bold" : "normal"}
              _hover={{ color: "text.primary", textDecoration: "underline" }}
              onClick={() => {
                navigate("/rkauctioneers/sessions");
              }}
              cursor="pointer"
            >
              Sessions & Times
            </Text>
            <Text
              px={4}
              fontSize="12px"
              letterSpacing="0.13em"
              textTransform="uppercase"
              color={currentPage === "about" ? "brand.hover" : "text.secondary"}
              fontWeight={currentPage === "about" ? "bold" : "normal"}
              _hover={{ color: "text.primary", textDecoration: "underline" }}
              onClick={() => {
                navigate("/rkauctioneers/about");
              }}
              cursor="pointer"
            >
              About
            </Text>
            <Text
              px={4}
              fontSize="12px"
              letterSpacing="0.13em"
              textTransform="uppercase"
              color={
                currentPage === "contact" ? "brand.hover" : "text.secondary"
              }
              fontWeight={currentPage === "contact" ? "bold" : "normal"}
              _hover={{ color: "text.primary", textDecoration: "underline" }}
              onClick={() => {
                navigate("/rkauctioneers/contact");
              }}
              cursor="pointer"
            >
              Contact
            </Text>
          </HStack>

          {/* CTA */}
          <HStack gap={5}>
            {/* <Text
              fontSize="sm"
              letterSpacing="0.04em"
              display={{ base: "none", lg: "block" }}
              fontWeight="bold"
            >
              +27 11 789 7422
            </Text> */}
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
              onClick={() => {
                window.open(
                  "https://bidlive.rkauctioneers.co.za/login",
                  "_blank",
                );
              }}
            >
              Register to Bid
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
