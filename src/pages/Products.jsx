import useFetch from "../hooks/useFetch";

import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";

function Products() {
  const products = useFetch(
    "https://mock.apidog.com/m1/1316938-1317204-default/products"
  );

  const images = {
    "Lara Croft Figure": product1,
    "Tomb Raider T-Shirt": product2,
    "Explorer Backpack": product3,
  };

  const names = {
    "Lara Croft Figure": "Figura de Lara Croft",
    "Tomb Raider T-Shirt": "Camiseta Tomb Raider",
    "Explorer Backpack": "Mochila Explorer",
  };

  const descriptions = {
    "Official Lara Croft action figure.":
      "Figura coleccionable inspirada en Lara Croft.",

    "Black t-shirt with Tomb Raider logo.":
      "Camiseta oficial con el logotipo de Tomb Raider.",

    "Adventure-style backpack inspired by Lara Croft.":
      "Mochila estilo aventura inspirada en Lara Croft.",
  };

  return (
    <div className="page-container">

      <h1 className="page-title">Productos</h1>

      <p
        style={{
          marginBottom: "30px",
          color: "#cccccc",
          fontSize: "18px",
        }}
      >
        Descubre una selección de artículos inspirados en el universo de
        Tomb Raider.
      </p>

      <div className="cards-grid">

        {products.map((product) => (

          <div className="card" key={product.id}>

            <img
              src={images[product.name]}
              alt={product.name}
              className="card-image"
            />

            <div className="badge">
              PRODUCTO OFICIAL
            </div>

            <h3>{names[product.name]}</h3>

            <p>
              <strong>Precio:</strong> ${product.price}
            </p>

            <p>
              <strong>Categoría:</strong> {product.category}
            </p>

            <p>{descriptions[product.description]}</p>

            <p
              style={{
                color: "#86efac",
                fontWeight: "bold",
              }}
            >
              ✔ Disponible
            </p>

            <button className="product-button">
              Comprar
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Products;