import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { ShoesNew } from "./ShoesNew";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MapPage } from "./MapPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoes/new" element={<ShoesNew />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
