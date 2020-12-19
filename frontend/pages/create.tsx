import Imagem from 'next/image';
import { useState } from 'react';

const Create: React.FC = () => {
  const [avatar, setAvatar] = useState('/img/user.png');

  console.log(avatar)

  return (
    <div className="flex flex-1 justify-center items-center h-screen w-screen bg-gray-900">
      <form className="flex justify-center items-center flex-col">
        <Imagem 
          className="rounded-full"
          src={`${avatar}`}
          alt="users logo" 
          width={200} 
          height={200}
        />
        <br/>
        <input
          className="text-white m-2 bg-gray-500 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 "
          placeholder="avatar (url)"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
        <input
          className="text-white m-2 bg-gray-500 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 "
          placeholder="Nome"
        />
        <input
          className="text-white m-2 bg-gray-500 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 "
          placeholder="email"
        />
        <input
          className="text-white m-2 bg-gray-500 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 "
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