import {
  NavBar,
  AnnouncementStrip,
  Hero,
  StatsBar,
  AuctionHighlights,
  ServicesSection,
  About,
  ShowRoom,
  Contact,
  Footer,
} from "@/components";
import { Box } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box bg="bg.page" minH="100vh">
      {/* Navbar */}
      <NavBar />

      {/* Announcement Strip */}
      <AnnouncementStrip />

      {/* Hero Section */}
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
      <ShowRoom />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default HomePage;
