import { useState } from 'react';
import { motion, Variants } from 'framer-motion'

import api from '../services/api';

const login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    const data = {email, password};

    try{
      await api.post('sessions', data);
      alert('Login realizado com sucesso!');
    }catch(e){
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className="flex flex-1 justify-center items-center h-screen w-screen bg-gray-900">
      <form 
        className="flex justify-center items-center flex-col"
        onSubmit={handleLogin}
      >
        <motion.img 
          className="h-80 w-80 -m-28"
          src="/img/login.svg" 
          layoutId="logoLogin"
        />
        <input
          className="text-white m-2 bg-gray-500 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 "
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="text-white m-2 bg-gray-500 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 "
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button 
        className="m-4 bg-indigo-900 text-gray-300 font-bold text-2xl h-12 w-40 rounded-2xl hover:bg-indigo-800"
        type="submit">Logar</button>
      </form>
    </div>
  )
}

export default login;