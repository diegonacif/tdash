import swal from "sweetalert";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/authContext";


import "./styles.css";

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
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="">Usuário </label>
        <input
          type="text"
          onChange={(event) => setUserEmail(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="">Senha</label>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div className="form-group">
        <button type="submit"> Entrar </button>
      </div>
    </form>
  );
};

export default Login;