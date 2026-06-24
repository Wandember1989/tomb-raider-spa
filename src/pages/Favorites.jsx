import { FaHeart } from "react-icons/fa";

import lara from "../assets/images/lara.jpg";
import game3 from "../assets/images/game3.jpg";
import product1 from "../assets/images/product1.jpg";

function Favorites() {
  const favorites = [
    {
      id: 1,
      title: "Lara Croft",
      type: "Personaje",
      image: lara,
    },
    {
      id: 2,
      title: "Shadow of the Tomb Raider",
      type: "Juego",
      image: game3,
    },
    {
      id: 3,
      title: "Figura de Lara Croft",
      type: "Producto",
      image: product1,
    },
  ];

  return (
    <div className="page-container">

      <h1 className="page-title">
        <FaHeart className="title-icon" />
        Mis Favoritos
      </h1>

      <p
        style={{
          marginBottom: "30px",
          color: "#cccccc",
          fontSize: "18px",
        }}
      >
        Aquí encontrarás los elementos que has marcado como favoritos
        dentro de la aplicación.
      </p>

      <div className="cards-grid">

        {favorites.map((item) => (

          <div className="card" key={item.id}>

            <img
              src={item.image}
              alt={item.title}
              className="card-image"
            />

            <div className="badge">
              FAVORITO
            </div>

            <h3>{item.title}</h3>

            <p>
              <strong>Tipo:</strong> {item.type}
            </p>

            <button className="product-button">
              Ver información
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Favorites;