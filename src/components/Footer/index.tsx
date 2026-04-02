import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <Box
      bg="ink.900"
      color="rgba(255,255,255,0.38)"
      py={10}
      px={{ base: 6, lg: 32 }}
    >
      <Flex gap={10} justify="space-between" align="center">
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
            onClick={() =>
              window.open("https://maps.app.goo.gl/5Rg4QzCU3aBsTziZ8", "_blank")
            }
            fontSize="9.5px"
            letterSpacing="0.22em"
            textTransform="uppercase"
            color="rgba(255,255,255,0.28)"
            mb={5}
            cursor="pointer"
            _hover={{ textDecoration: "underline" }}
          >
            256 Oak Avenue, Randburg, Johannesburg
          </Text>
          <HStack gap={4}>
            <Box
              _hover={{ cursor: "pointer", color: "brand.500" }}
              onClick={() =>
                window.open(
                  "https://www.facebook.com/russellkaplanauctioneers",
                  "_blank",
                )
              }
            >
              <FaFacebook size={21} />
            </Box>
            <Box
              _hover={{ cursor: "pointer", color: "brand.500" }}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/russellkaplanauctioneers/",
                  "_blank",
                )
              }
            >
              <FaInstagram size={21} />
            </Box>

            <Box
              _hover={{ cursor: "pointer", color: "brand.500" }}
              onClick={() =>
                window.open(
                  "http://www.youtube.com/@RussellKaplanAuctioneers",
                  "_blank",
                )
              }
            >
              <FaYoutube size={21} />
            </Box>
          </HStack>
        </Box>

        {/* Socials and Get App */}
        <VStack gap={5}>
          <Button
            bg="transparent"
            border="1px solid white"
            _hover={{ bg: "green.600" }}
            color="white"
            rounded="lg"
            w="full"
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/message/MMTJPEYF2UHAN1?autoload=1&app_absent=0",
                "_blank",
              )
            }
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </Button>
          <Button
            rounded="lg"
            w="full"
            _hover={{ bg: "brand.500" }}
            border="1px solid"
            borderColor="brand.500"
            onClick={() => window.open("tel:+27117897422", "_blank")}
          >
            <FaPhoneAlt />
            +27 11 789 7422
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};
