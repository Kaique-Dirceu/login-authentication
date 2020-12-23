import { createContext, useContext, useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import api from '../services/api';

interface AuthContextData{
  autheticated: boolean;
  handleLogin({email, password}: {email: string, password: string}): Promise<void>;
  handleLogout(): void;
}

const Context = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }) {
  const router = useRouter();

  const [autheticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token){
      api.defaults.headers.authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, [])

  async function handleLogin({email, password}: {email: string, password: string}) {
    const data = {email, password};

    try{
      const response = await api.post('sessions', data);

      // api.defaults.headers.authorization = `Bearer ${response.data.token}`
      
      // localStorage.setItem('@api-login:user', JSON.stringify(response.data.user));
      // localStorage.setItem('@api-login:token', (response.data.token));
      localStorage.setItem('token', JSON.stringify(response.data.token))
      api.defaults.headers.authorization = `Bearer ${response.data.token}`;
      setAuthenticated(true);

      alert('Login realizado com sucesso!');
      router.push('/user');
    }catch(e){
      alert('Falha no login, tente novamente.');
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token')
    api.defaults.headers.authorization = undefined;

    router.push('/login');
    console.log('Ferrou!');
  }

  if (loading) {
    return <h1>loading...</h1>
  }

  return(
    <Context.Provider value={{ autheticated, handleLogin, handleLogout }}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider };