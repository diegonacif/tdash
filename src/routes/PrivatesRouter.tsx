import React, { useEffect, useState } from "react";
import { Redirect, Route, RouteProps} from "react-router-dom";
import { useAuth } from "../hooks/authContext";
import {api} from "../services/api";

interface RoutesPropsData extends RouteProps {
  role?: string;
}

const PrivateRoutes: React.FC<RoutesPropsData> = ({ role, ...rest }) => {
    const [permissions, setPermissions] = useState([] as string[]);
    //fazer requisição para o back-end para verificar se existe as roles
    useEffect(() => {
        async function loadRoles() {
          const response = await api.get("users/listRoles");
          const findRole = response.data.some((r: string) =>
            role?.split(",").includes(r)
          );
          setPermissions(findRole);//via receber todas as roles 
        }
    
        loadRoles();
      }, [role]);

    const { userLogged } = useAuth();
   
  
    if(!userLogged()){
        return <Redirect to="/"/>
    }

    //verifica se o usuario está logado mas nao tem a role
    if(!role && userLogged()){
        return <Route {...rest}/>
    }


  return (
    permissions ? <Route {...rest} /> : <Redirect to="/"/>
    )
};

export {PrivateRoutes};