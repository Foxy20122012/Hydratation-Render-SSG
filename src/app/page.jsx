import Bienvenida from "../components/Ejemplo"
import Usos from "../components/Usos"

export default function Home() {
  return (
    <main>
      <section>
        <div>
          <h1 className='text-red-500 text-2xl'>Hola mundo</h1>
          <Bienvenida/>
          <Usos/>
        </div>
      </section>
    </main>
  )
}
