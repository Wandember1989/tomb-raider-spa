import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";

function Login() {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const [user, setUser] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login();
    navigate("/favorites");
  };

  return (
    <div className="login-page">

      <div className="login-box">

        <FaUserShield
          style={{
            fontSize: "60px",
            color: "#d4af37",
            marginBottom: "15px",
          }}
        />

        <h1>Tomb Raider</h1>

        <p
          style={{
            color: "#cccccc",
            marginBottom: "25px",
          }}
        >
          Inicia sesión para acceder a tus favoritos.
        </p>

        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="login-button"
          onClick={handleLogin}
        >
          Iniciar sesión
        </button>

      </div>

    </div>
  );
}

export default Login;