import {
  Hero,
  StatsBar,
  AuctionHighlights,
} from "@/components";
import { VStack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <VStack gap="10" w="full">
      {/* Hero Section - Breaks out to full width */}
      <Hero />

      {/* Stats Bar */}
      <StatsBar />

      {/* Highlights Section */}
      <AuctionHighlights />

      {/* Showroom Section */}
      {/* <ShowRoom /> */}

      {/* Contact Section */}
      {/* <Contact /> */}
    </VStack>
  );
};

export default HomePage;
