import Image from 'next/image'
import styles from './page.module.css'
import { Header } from '@/components/Header/Header'
import { User } from '@/components/Header/UserInfo/User'

export default function Home() {
  return (
    <>
    <Header>
      <User />
    </Header>
    <main className={styles.main}>

    </main>
    </>
  )
}
