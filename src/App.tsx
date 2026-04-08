import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";
import {
  About,
  Container,
  NavBar,
  AnnouncementStrip,
  Footer,
} from "./components";
import { Flex } from "@chakra-ui/react";
import { SessionsPage, ValuationsPage } from "./pages";

const App = () => {
  return (
    <Flex direction="column" bg="bg.page" minH="100vh" w="full">
      {/* Navbar - Full width */}
      <NavBar />

      {/* Announcement Strip - Full width */}
      <AnnouncementStrip />

      {/* Main Content Container - Takes remaining space */}
      <Container bg="white" shadow="xl" py={10} flex="1" w="100%" maxW="1600px">
        <Routes>
          <Route path="/rkauctioneers/" element={<HomePage />} />
          <Route path="/rkauctioneers/about" element={<About />} />
          <Route path="/rkauctioneers/valuations" element={<ValuationsPage />} />
          <Route path="/rkauctioneers/sessions" element={<SessionsPage />} />
        </Routes>
      </Container>

      {/* Footer - Full width */}
      <Footer />
    </Flex>
  );
};

export default App;
