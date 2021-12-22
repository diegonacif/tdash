import swal from "sweetalert";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/authContext";

import { Container } from "./styles";

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

      try {

      await signIn({ email, password });
      history.push("dashboard");
   
      } catch(e) {

        swal({
          title: "Oops",
          text: "Usuário ou senha incorretos!",
          icon: "error",
        });        
        
      }

    },
    [email, password, history, signIn]
  );

  return (
    <Container>      
      <form className="formContainer" onSubmit={handleSubmit}>
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
          <button type="submit"> Entrar </button>
        </div>
      </form>
    </Container>
  );
};

export default Login;