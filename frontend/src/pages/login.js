import Lottie from "lottie-react";
import animLogin from "../styles/img/anim-login.json";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [warning, setWarning] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email !== "" && password !== "") {
      if (email === "admin@gmail.com" && password === "123456") {
        alert("Connexion réussie");
        setWarning("");
        setError("");
      } else {
        if (warning !== "") {
          setWarning("");
          setError("Identifiants inconnus");
        } else {
          setError("Identifiants inconnus");
        }
      }
    } else {
      setWarning("Veuillez remplir tous les champs");
    }
  };

  return (
    <div class="login-main">
      <div class="login-container">
        <div class="login-anim">
          <div>
            <Lottie animationData={animLogin} />
          </div>
        </div>
        <div class="login-container-form">
          <h1>Bienvenue sur<span>Archiva</span>,</h1>
          <h2>Veuillez vous connecter</h2>
          <form class="login-form" onSubmit={handleLogin}>
            <label>Email</label>
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Mot de passe</label>
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            {error && <p class="error">{error}</p>}
            {warning && <p class="warning">{warning}</p>}
            <br />
            <button type="submit">Se connecter</button>
            <div class="separer">
                <div></div>
                <p>OU</p>
                <div></div>
            </div>
            <a href="#" class="recup-mot-de-passe">
              Vous avez oublié votre mot de passe ?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
