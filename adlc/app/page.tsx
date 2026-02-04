import Image from "next/image";
import { HomeCard, PolicyAdvocacy, About, Committee, JoinForm, Footer} from "../components/index"


export default function Home() {
  return (
    <div>
      <HomeCard/>
      <About />
      <PolicyAdvocacy/>
      <Committee/>
      <Footer />
      </div>
  )
}