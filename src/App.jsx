// Imports
import "./App.css";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Code
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Footer />

        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/fichas" element="" />
            <Route path="/turnos" element="" />
            <Route path="/catalogo" element="" />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

// Export
export default App;
