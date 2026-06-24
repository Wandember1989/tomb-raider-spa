import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Games from "./pages/Games";
import Products from "./pages/Products";
import Forums from "./pages/Forums";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";

import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/characters" element={<Characters />} />

        <Route path="/games" element={<Games />} />

        <Route path="/products" element={<Products />} />

        <Route path="/forums" element={<Forums />} />

        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;