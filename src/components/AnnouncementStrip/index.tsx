import { Box, Text, Link } from "@chakra-ui/react";

export const AnnouncementStrip = () => {
  return (
    <Box
      mt="72px"
      bg="brand.subtle"
      borderBottom="1px solid"
      borderColor="brand.primary"
      color="text.primary"
      textAlign="center"
      py={3}
      px={5}
    >
      <Text fontSize="11.5px" letterSpacing="0.14em" textTransform="uppercase">
        Consignments open for our Autumn Wunderkammer Auction —{" "}
        <Link
          color="brand.hover"
          fontWeight="medium"
          textDecoration="underline"
          textUnderlineOffset="3px"
        >
          Book a valuation
        </Link>
        {" · "}Deadline: Friday, 10 April
      </Text>
    </Box>
  );
};
