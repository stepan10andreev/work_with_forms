import Image from 'next/image'
import { Header } from '@/components/Header/Header'
import { UserInfo } from '@/components/Header/UserInfo/UserInfo'
import { Content } from '@/components/ui-components/Content/Content'
import { UserViewForm } from '@/components/UserViewForm/UserViewForm'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

export default function Home() {
  return (
    <>
    {/* <Provider store={store}> */}
      <Header>
        <UserInfo />
      </Header>
      <Content>
        <UserViewForm />
      </Content>
    {/* </Provider> */}

    </>
  )
}
