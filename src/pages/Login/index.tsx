import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/authContext";
import { Container } from './styles';

const Login: React.FC = () => {
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem("@PermissionYT:token");
  }, []);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      await signIn({ email, password });
      history.push("/dashboard");
    },
    [email, history, password, signIn]
  );

  return (
    <Container>
      {/* <div className="loginLogo"><span>TDash</span></div> */}
      <div className="formContainer" onSubmit={handleSubmit}>
        {/* <h2>Login</h2> */}
        <div className="form-group">
          <span className="logoArea" />
          <label htmlFor="">Email</label>
          <div className="inputIconEmail"></div>
          <input
            type="text"
            onChange={(event) => setUserEmail(event.target.value)}
            placeholder="Insira seu email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Senha</label>
          <div className="inputIconPassword"></div>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Insira sua senha"
          />
        </div>

        <div className="form-group">
          <button type="submit">Entrar</button>
        </div>
      </div>
    </Container>
  );
};

export default Login;