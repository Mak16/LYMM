/* eslint-disable react/no-unescaped-entities */
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import NosServices from "./components/NosServices";
import Tarifs from "./components/Tarifs";
import Missions from "./components/Missions";
import Ressources from "./components/Ressources";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="LYMM/" element={<Home />} />
        <Route path="LYMM/services" element={<NosServices />} />
        <Route path="LYMM/tarifs" element={<Tarifs />} />
        <Route path="LYMM/mission" element={<Missions />} />
        <Route path="LYMM/ressources" element={<Ressources />} />
        <Route path="LYMM/contacter" element={<Tarifs />} />


      </Routes>
    </>
  );
}

export default App;
