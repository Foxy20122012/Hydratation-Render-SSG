import Bienvenida from "../../components/Ejemplo"

export default function Home() {
  return (
    <main>
      <section>
        <div>
          <h1 className='text-red-500 text-2xl'>Esta pagina es de los posts</h1>
          <Bienvenida/>
        </div>
      </section>
    </main>
  )
}
