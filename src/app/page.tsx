import Image from 'next/image'
import styles from './page.module.css'
import { Header } from '@/components/Header/Header'
import { UserInfo } from '@/components/Header/UserInfo/UserInfo'

export default function Home() {
  return (
    <>
    <Header>
      <UserInfo />
    </Header>
    <main className={styles.main}>

    </main>
    </>
  )
}
