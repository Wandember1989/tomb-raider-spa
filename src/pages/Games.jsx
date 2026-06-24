import useFetch from "../hooks/useFetch";

import game1 from "../assets/images/game1.jpg";
import game2 from "../assets/images/game2.jpg";
import game3 from "../assets/images/game3.jpg";

function Games() {
  const games = useFetch(
    "https://mock.apidog.com/m1/1316938-1317204-default/games"
  );

  const images = {
    "Tomb Raider": game1,
    "Rise of the Tomb Raider": game2,
    "Shadow of the Tomb Raider": game3,
  };

  const descriptions = {
    "Reboot of the Tomb Raider saga.":
      "Reinicio de la legendaria saga Tomb Raider.",

    "Lara searches for the secret of immortality.":
      "Lara Croft emprende una aventura para descubrir el secreto de la inmortalidad.",

    "Lara faces the Trinity organization.":
      "Lara se enfrenta a la organización Trinity para salvar el mundo.",
  };

  return (
    <div className="page-container">

      <h1 className="page-title">Juegos</h1>

      <p
        style={{
          marginBottom: "30px",
          color: "#cccccc",
          fontSize: "18px",
        }}
      >
        Revive las aventuras más importantes protagonizadas por Lara Croft.
      </p>

      <div className="cards-grid">

        {games.map((game) => (

          <div className="card" key={game.id}>

            <img
              src={images[game.title]}
              alt={game.title}
              className="card-image"
            />

            <div className="badge">
              JUEGO OFICIAL
            </div>

            <h3>{game.title}</h3>

            <p>
              <strong>Año:</strong> {game.releaseYear}
            </p>

            <p>
              <strong>Plataformas:</strong> {game.platform}
            </p>

            <p>
              {descriptions[game.description]}
            </p>

            <button className="product-button">
              Ver detalles
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Games;