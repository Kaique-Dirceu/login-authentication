import Imagem from 'next/image';

const user: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center h-screen w-screen bg-gray-900">
      <Imagem 
        className="rounded-full"
        src="/img/user.png" 
        width={300} 
        height={300} 
      />

      <h3 className="text-white font-bold text-3xl m-4">Nome</h3>
      <span className="text-white font-bold text-xl">Email</span>
    </div>
  );
}

export default user;