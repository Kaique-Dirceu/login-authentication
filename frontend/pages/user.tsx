import { useState, useEffect } from 'react';
import api from '../services/api';

const user: React.FC = () => {
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const token = localStorage.getItem('tokenId');

  useEffect(() => {
    api.get('authenticated', {
      headers: {
        authorization: `Bearer ${token}`,
      }
    }).then(response => {
      setAvatar(response.data.avatar);
      setName(response.data.name);
      setEmail(response.data.email);
    }) 
  }, [token]);

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

    </div>
  );
}

export default user;