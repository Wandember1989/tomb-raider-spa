import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaUser,
  FaGamepad,
  FaShoppingCart,
  FaComments,
  FaHeart,
  FaLock,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">

        <h2>TOMB RAIDER</h2>

        <span>Companion App</span>

      </div>

      <div className="menu">

        <NavLink to="/" end>
          <FaHome />
          Inicio
        </NavLink>

        <NavLink to="/characters">
          <FaUser />
          Personajes
        </NavLink>

        <NavLink to="/games">
          <FaGamepad />
          Juegos
        </NavLink>

        <NavLink to="/products">
          <FaShoppingCart />
          Productos
        </NavLink>

        <NavLink to="/forums">
          <FaComments />
          Foros
        </NavLink>

        <NavLink to="/favorites">
          <FaHeart />
          Favoritos
        </NavLink>

        <NavLink to="/login">
          <FaLock />
          Login
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;