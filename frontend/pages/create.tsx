import { useRouter } from 'next/router';
import { useState } from 'react';
import { motion, Variants } from 'framer-motion';

import api from '../services/api';

const Create: React.FC = () => {
  const router = useRouter();

  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister(e) {
    e.preventDefault();

    const data = {name, avatar, email, password};

    try{
      await api.post('users', data);

      alert('Cadastro realizado com sucesso!');
      router.push('/')
    }catch(e){  
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <div className="flex flex-1 justify-center items-center h-screen w-screen bg-gray-900">
      <form 
        className="flex justify-center items-center flex-col"
        onSubmit={handleRegister}
      >
        <motion.img 
          className="h-80 w-80 -m-28"
          src="/img/login.svg" 
          layoutId="logoLogin"
        />
        <input
          className="text-white m-2 bg-gray-500 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 "
          placeholder="avatar (url)"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
        <input
          className="text-white m-2 bg-gray-500 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 "
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
        type="submit">Criar</button>
      </form>
    </div>
  )
}

export default Create;