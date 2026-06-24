import useFetch from "../hooks/useFetch";

import lara from "../assets/images/lara.jpg";
import jonah from "../assets/images/jonah.jpg";
import ana from "../assets/images/ana.jpg";

function Characters() {
  const characters = useFetch(
    "https://mock.apidog.com/m1/1316938-1317204-default/characters"
  );

  const images = {
    "Lara Croft": lara,
    "Jonah Maiava": jonah,
    "Ana": ana,
  };

  const roles = {
    Archaeologist: "Arqueóloga",
    "Survival Expert": "Experto en supervivencia",
    Antagonist: "Antagonista",
  };

  const descriptions = {
    "Main protagonist of Tomb Raider.":
      "Protagonista principal de Tomb Raider.",

    "Lara's trusted ally.":
      "Aliado de confianza de Lara.",

    "Member of Trinity organization.":
      "Miembro de la organización Trinity.",
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Personajes</h1>

      <div className="cards-grid">
        {characters.map((character) => (
          <div className="card" key={character.id}>
            <img
              src={images[character.name]}
              alt={character.name}
              className="card-image"
            />

            <h3>{character.name}</h3>

            <p>
              <strong>Rol:</strong> {roles[character.role]}
            </p>

            <p>
              <strong>Edad:</strong> {character.age} años
            </p>

            <p>{descriptions[character.description]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;