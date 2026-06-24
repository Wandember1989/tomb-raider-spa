import useFetch from "../hooks/useFetch";

function Forums() {
  const forums = useFetch(
    "https://mock.apidog.com/m1/1316938-1317204-default/forums"
  );

  return (
    <div className="page-container">
      <h1 className="page-title">Foros</h1>

      <p
        style={{
          marginBottom: "30px",
          color: "#cccccc",
          fontSize: "18px",
        }}
      >
        Participa en las conversaciones más populares de la comunidad de
        Tomb Raider.
      </p>

      <div className="cards-grid">
        {forums.map((forum) => (
          <div className="card" key={forum.id}>
            <div className="badge">COMUNIDAD</div>

            <h3>{forum.title}</h3>

            <p>
              <strong>Autor:</strong> {forum.author}
            </p>

            <p>
              <strong>Respuestas:</strong> {forum.replies}
            </p>

            <button className="product-button">
              Ver discusión
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forums;