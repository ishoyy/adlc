import Image from "next/image";
import { Header, HomeCard, PolicyAdvocacy, About, Committee, JoinForm} from "../components/index"


export default function Home() {
  return (
    <div>
              <Header />

      <HomeCard/>
      <About />
      <PolicyAdvocacy/>
      <Committee/>
              <JoinForm />

      </div>
  )
}