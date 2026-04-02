import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";
import { About, ServicesSection } from "./components";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/rkauctioneers/" element={<HomePage />} />
        <Route path="/rkauctioneers/about" element={<About />} />
        <Route path="/rkauctioneers/services" element={<ServicesSection />} />
      </Routes>
    </>
  );
};

export default App;
