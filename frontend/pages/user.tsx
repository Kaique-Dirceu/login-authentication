import { useState, useEffect, useContext } from 'react';
import { Context } from './_authContext';
import api from '../services/api';

const user: React.FC = () => {
  const { handleLogout } = useContext(Context);

  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    async function getItems() {
      const response = await api.get('authenticated');

      

      setAvatar(response.data.avatar);
      setName(response.data.name);
      setEmail(response.data.email);
    }

    getItems();
  }, [])

  function singOut(){
    handleLogout();
  }

  return (
    <div className="flex flex-1 flex-col justify-center items-center h-screen w-screen bg-gray-900">

          <img
          className="rounded-full"
          src={`${avatar}`}
          width={300} 
          height={300} 
        />

          <h3 className="text-white font-bold text-3xl m-4">{name}</h3>
          <span className="text-white font-bold text-xl">{email}</span>

            <button 
              className="m-4 bg-indigo-900 text-gray-300 font-bold text-2xl h-12 w-40 rounded-2xl hover:bg-indigo-800"
              onClick={singOut}
            >Sair</button>
    </div>
  );
}

export default user;