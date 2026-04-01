import {
  Container,
  NavBar,
  AnnouncementStrip,
  Hero,
  StatsBar,
  AuctionHighlights,
  ServicesSection,
  About,
  Footer,
} from "@/components";
import { Box, VStack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box bg="bg.page" minH="100vh" w='full'>
      {/* Navbar - Full width */}
      <NavBar />

      {/* Announcement Strip - Full width */}
      <AnnouncementStrip />

      {/* Main Content Container */}
      <Container bg="white" shadow="xl" py={6}>
        <VStack gap="10">
          {/* Hero Section - Breaks out to full width */}
          <Hero />

          {/* Stats Bar */}
          <StatsBar />

          {/* Highlights Section */}
          <AuctionHighlights />

          {/* Services Section */}
          <ServicesSection />

          {/* About Section */}
          <About />

          {/* Showroom Section */}
          {/* <ShowRoom /> */}

          {/* Contact Section */}
          {/* <Contact /> */}
        </VStack>
      </Container>

      {/* Footer - Full width */}
      <Footer />
    </Box>
  );
};

export default HomePage;
