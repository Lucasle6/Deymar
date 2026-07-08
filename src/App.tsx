import { Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Site from "./pages/Site";

export default function App() {
  return (
    <Routes>
      {/* the split-screen entry the visitor sees first */}
      <Route path="/" element={<Intro />} />
      {/* the full one-page site; ?focus=arquitectura|interiorismo optional */}
      <Route path="/sitio" element={<Site />} />
    </Routes>
  );
}
