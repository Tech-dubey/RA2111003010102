import Navbar from "@/components/Navbar"

import Shop from "@/components/Shop"

export default function Home(){
  return (
    <main>
      <Navbar />
      <section className="p-4">
        <h1 className="text-3xl">Welcome !</h1>
        <Shop />
      </section>
    </main>
  )
}