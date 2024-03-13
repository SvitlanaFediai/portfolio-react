import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../../pages/home";
import Projects from "../../pages/projects";
import Contacts from "../../pages/contact";
import Skills from "../../pages/skills";
import ModalWindow from "../modalWindow/modalWindow";

function AnimatedRoutes() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={background || location} key={location}>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </AnimatePresence>

      {background && (
        <Routes>
          <Route path="/projects/:title" element={<ModalWindow />} />
        </Routes>
      )}
    </>
  );
}

export default AnimatedRoutes;
