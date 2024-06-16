import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./Login.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <div className="container">
      <div className="formulario">
        <form onSubmit={handleSubmit}>
          <h1>Acesse o sistema</h1>
          <div>
            <input
              type="email"
              className="email"
              placeholder="email"
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="icon" />
          </div>
          <div>
            <input
              type="password"
              className="senha"
              placeholder="senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>
          <div className="recall-forget">
            <label>
              <input type="checkbox" />
              Lembre de mim
            </label>
            <a href="#">Esqueci minha senha</a>
          </div>

          <button>Entrar</button>

          <div className="singup-link">
            <p>
              Não possui uma conta? <a href="#">Cadastre-se</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
