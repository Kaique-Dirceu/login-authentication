import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex h-screen w-screen bg-gray-900 justify-center items-center">
      <motion.img 
        className="h-96 w-96"
        src='/img/login.svg' 
        layoutId="logoLogin"
      />

        <div className="flex flex-col justify-center items-center bg-gray-800 w-80 h-80 rounded-xl">
          <Link href="/login">
          <a className="flex justify-center m-4 items-center bg-gray-500 h-20 w-60 rounded-2xl text-white text-3xl font-bold hover:bg-gray-700">
            Login
          </a>
          </Link>

          <Link href="/create">
          <a className="flex justify-center m-4 items-center bg-gray-500 h-20 w-60 rounded-2xl text-white text-3xl font-bold hover:bg-gray-700">
            Criar conta
          </a>
          </Link>
        </div>
    </div>
  )
}
