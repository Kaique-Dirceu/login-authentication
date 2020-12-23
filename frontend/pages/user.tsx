import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
// import AuthContext from './_auth';
import { Context } from './_authContext';
import api from '../services/api';

const user: React.FC = () => {
  // const {signOut} = useContext(AuthContext);
  const { handleLogout } = useContext(Context);

  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // const token = localStorage.getItem('@api-login:token')

  useEffect(() => {
    async function pegarOsBagulho() {
      const response = await api.get('authenticated');

      

      setAvatar(response.data.avatar);
      setName(response.data.name);
      setEmail(response.data.email);
    }

    pegarOsBagulho();
  }, [])

  // useEffect(() => {
  //   api.get('authenticated', {
  //     headers: {
  //       authorization: `Bearer ${token}`,
  //     }
  //   }).then(response => {
  //     setAvatar(response.data.avatar);
  //     setName(response.data.name);
  //     setEmail(response.data.email);
  //   }) 
  // }, [token]);

  // signOut();
  function socorro(){
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

          {/* <Link href="/login"> */}
            <button 
              className="m-4 bg-indigo-900 text-gray-300 font-bold text-2xl h-12 w-40 rounded-2xl hover:bg-indigo-800"
              onClick={socorro}
            >Sair</button>
          {/* </Link> */}
    </div>
  );
}

export default user;