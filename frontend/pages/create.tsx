import Imagem from 'next/image';
import { useState } from 'react';
import { motion, Variants } from 'framer-motion'

const Create: React.FC = () => {
  return (
    <div className="flex flex-1 justify-center items-center h-screen w-screen bg-gray-900">
      <form className="flex justify-center items-center flex-col">
        <motion.img 
          className="h-80 w-80 -m-28"
          src="/img/login.svg" 
          layoutId="logoLogin"
        />
        <input
          className="text-white m-2 bg-gray-500 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 "
          placeholder="avatar (url)"
        />
        <input
          className="text-white m-2 bg-gray-500 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 "
          placeholder="Nome"
        />
        <input
          className="text-white m-2 bg-gray-500 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 "
          type="email"
          placeholder="email"
        />
        <input
          className="text-white m-2 bg-gray-500 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 "
          type="password"
          placeholder="senha"
        />

        <button 
        className="m-4 bg-indigo-900 text-gray-300 font-bold text-2xl h-12 w-40 rounded-2xl hover:bg-indigo-800"
        type="submit">Criar</button>
      </form>
    </div>
  )
}

export default Create;