import Slider from "../components/Slider";

import {
  FaUser,
  FaGamepad,
  FaShoppingCart,
  FaComments,
  FaBookOpen,
  FaTags,
  FaBolt,
} from "react-icons/fa";

function Home() {
  return (
    <div className="page-container">

      <Slider />

      <div className="hero">

        <h1>Tomb Raider Companion</h1>

        <p>
          Explora el universo de Tomb Raider, descubre sus personajes,
          conoce todos los juegos de la saga y encuentra productos
          oficiales en una sola aplicación.
        </p>

      </div>

      <div className="stats">

        <div className="stat-card">
          <FaUser className="stat-icon" />
          <h1>3</h1>
          <p>Personajes</p>
        </div>

        <div className="stat-card">
          <FaGamepad className="stat-icon" />
          <h1>3</h1>
          <p>Juegos</p>
        </div>

        <div className="stat-card">
          <FaShoppingCart className="stat-icon" />
          <h1>3</h1>
          <p>Productos</p>
        </div>

        <div className="stat-card">
          <FaComments className="stat-icon" />
          <h1>2</h1>
          <p>Foros</p>
        </div>

      </div>

      <div className="about">

        <h2>¿Por qué elegir Tomb Raider Companion?</h2>

        <div className="cards-grid">

          <div className="card">
            <h3>
              <FaBookOpen className="title-icon" />
              Información completa
            </h3>

            <p>
              Consulta personajes, juegos y datos relevantes de la
              saga Tomb Raider.
            </p>
          </div>

          <div className="card">
            <h3>
              <FaTags className="title-icon" />
              Productos oficiales
            </h3>

            <p>
              Descubre artículos inspirados en Lara Croft y el universo
              Tomb Raider.
            </p>
          </div>

          <div className="card">
            <h3>
              <FaComments className="title-icon" />
              Comunidad
            </h3>

            <p>
              Participa en discusiones y conoce la opinión de otros
              seguidores de la saga.
            </p>
          </div>

          <div className="card">
            <h3>
              <FaBolt className="title-icon" />
              React SPA
            </h3>

            <p>
              Aplicación desarrollada utilizando React, React Router y
              una API simulada mediante Apidog.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;