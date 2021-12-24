import Head from 'next/head'
import Image from 'next/image'
import { useMoralis } from 'react-moralis';
import Login from '../Components/Login'
import MainPage from '../Components/MainPage';
import styles from '../styles/Home.module.css'

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();
  if (!isAuthenticated) return <Login />

  return (
    <div>
      <MainPage />
    </div>
  )
}
