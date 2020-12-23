import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import api from '../services/api';

interface AuthContextData{
  signed: boolean;
  user: object | null;
  signIn({email, password}: {email: string, password: string}): Promise<void>;
  signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<object | null>(null)

  const router = useRouter();

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await localStorage.getItem('@api-login:user');
      const storageToken = await localStorage.getItem('@api-login:token');

      if (storageUser && storageToken) {
        api.defaults.headers.authorization = `Bearer ${storageToken}`;

        setUser(JSON.parse(storageUser));
      }
    }

    loadStorageData();
  }, [])

  async function signIn({email, password}: {email: string, password: string}) {
    const data = {email, password};

    try{
      const response = await api.post('sessions', data);

      setUser(response.data.user);

      api.defaults.headers.authorization = `Bearer ${response.data.token}`
      
      localStorage.setItem('@api-login:user', JSON.stringify(response.data.user));
      localStorage.setItem('@api-login:token', (response.data.token));
      
      alert('Login realizado com sucesso!');
      router.push('/user');
    }catch(e){
      alert('Falha no login, tente novamente.');
    }
  }

  async function signOut() {
    // localStorage.clear()
    // localStorage.removeItem('@api-login:user');
    // localStorage.removeItem('@api-login:user');
    setUser(null);
    console.log('Lascou!')
  }  

  return(
    <AuthContext.Provider value={{signed: !!user, user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;