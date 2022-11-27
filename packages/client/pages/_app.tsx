import type { AppProps } from 'next/app';
import { useState } from 'react';
import { User } from 'types';
import Navbar from '../components/layouts/Navbar';
import { UserContext } from '../contexts/UserContext';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Navbar isLoggedIn={user !== null} />
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
