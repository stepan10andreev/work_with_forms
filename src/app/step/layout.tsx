import { Header } from "@/components/Header/Header"
import { Stepper } from "@/components/Header/Stepper/Stepper"

export default function StepLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header>
        <Stepper />
      </Header>
      {children}
    </>
  )
}


