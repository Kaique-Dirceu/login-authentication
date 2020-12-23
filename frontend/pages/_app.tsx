import "tailwindcss/tailwind.css";
import '../styles/globals.css'
import { AnimateSharedLayout } from 'framer-motion'

import { AuthProvider } from '../pages/_authContext';

function MyApp({ Component, pageProps }) {
  return (
  <AuthProvider>
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  </AuthProvider>
  )
}

export default MyApp
