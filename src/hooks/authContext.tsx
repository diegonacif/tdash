import {
  createContext,
  useCallback,
  useContext,  
  useState,

} from "react";


import {api} from "../services/api";

interface User {
  id: string;
  avatar_url: string;
  name: string;
  email: string;
}

interface AuthContextState {
  token: TokenState
  signIn({ email, password }: UserData): Promise<void>;
  userLogged():boolean;
  signOut(): void;
  updateUser(user: User): void;
  user: User;
  
}

interface UserData {
  email: string;
  password: string;
}

interface TokenState {
  token: string;
  user: User;
}





const AuthContext = createContext<AuthContextState>({} as AuthContextState);  
const AuthProvider: React.FC = ({ children }) => {

 
  //armazenando token em um estado
  const [token, setToken] = useState<TokenState>(()=>{
    const token = localStorage.getItem("@PermissionYT:token");
    const user = localStorage.getItem("@PermissionYT:user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
      
    }

    return {} as TokenState;

  })
 
  const signIn = useCallback(async ({ email, password }: UserData) => {
    const response = await api.post("sessions", {
      email,
      password,
    });
 
   const {token, user} = response.data

   localStorage.setItem("@PermissionYT:token", token);
   localStorage.setItem("@PermissionYT:user", JSON.stringify(user));

   api.defaults.headers.authorization = `Bearer ${token}`;

   setToken({token, user});
    
  }, []);


  const signOut = useCallback(() => {
    localStorage.removeItem("@PermissionYT:token");
    localStorage.removeItem("@PermissionYT:token");
  

    setToken({} as TokenState);
  }, []);


    //verificar se existe um token no localstorage
    const userLogged = useCallback(() =>{
      const token = localStorage.getItem("@PermissionYT:token")
      const user = localStorage.getItem("@PermissionYT:user")
         if(token && user){
           return true;
  
         }
         return false
  
       }, [])
       
       
       const updateUser = useCallback(
        (user: User) => {
          localStorage.setItem('@GoBarber:user', JSON.stringify(user));
    
          setToken({
            token: token.token,
            user,
          });
        },
        [setToken, token.token],
      );

 
  return (
    <AuthContext.Provider value={{  user: token.user,  token, signIn,signOut, userLogged, updateUser}}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextState {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };