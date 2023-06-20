import Image from 'next/image'
import { Header } from '@/components/Header/Header'
import { UserInfo } from '@/components/Header/UserInfo/UserInfo'
import { Content } from '@/components/ui-components/Input/Content/Content'
import { UserViewForm } from '@/components/UserViewForm/UserViewForm'

export default function Home() {
  return (
    <>
      <Header>
        <UserInfo />
      </Header>
      <Content>
        <UserViewForm />
      </Content>
    </>
  )
}
