import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
  } from "react";
  
  import {api} from "../services/api";
  
  interface AuthContextState {
    token: string
    signIn({ email, password }: UserData): Promise<void>;
    
  }
  
  interface UserData {
    email: string;
    password: string;
  }
  
  interface TokenState {
    token: string;
  }
  
  const AuthContext = createContext<AuthContextState>({} as AuthContextState);
  
  const AuthProvider: React.FC = ({ children }) => {
   
    const signIn = useCallback(async ({ email, password }: UserData) => {
      const response = await api.post("/sessions", {
        email,
        password,
      });
  
    
     const {token} = response.data
     localStorage.setItem('@PermissionYT:token', token);
  
      
    }, []);
  
   
    return (
      <AuthContext.Provider value={{ token:"sfsdfsdfffff", signIn}}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  function useAuth(): AuthContextState {
    const context = useContext(AuthContext);
    return context;
  }
  
  export { AuthProvider, useAuth };