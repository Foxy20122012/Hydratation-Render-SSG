import Presente from "../../components/Welcome"

export default function Home() {
  return (
    <main>
      <section>
        <div>
          <h1 className='text-center text-black text-2xl font-bold text-x'>VERSION DE NUESTRA PAGINA </h1>
          <h2 className ='text-black font-bold text-x'>Esta es nuestro primer lanzamiento de la pagina por lo cual la nombraremos esta version primerisa  como version 1.0 </h2>
          
          <h5 className=' text-black text-2xl font-bold text-x'>Elementos usados en la creacion de nuestro Blog </h5>
          <p>Para la implementación de nuestro Blog usamos las siguientes tecnologias:</p>
          <p>.</p>
          <p>vscode</p>
          <p>next 13</p>
          <p>javascript</p>
          <p>react</p>
          <h2 className ='text-center text-2x2 text-black font-bold text-x'>STATIC SITE GENERATION (SSG)</h2>
          <p>. </p>
          <h6>La generación estática describe el proceso de compilación y representación de un sitio web o una aplicación
             en el momento de la creación. El resultado es un montón de archivos estáticos, incluido el propio archivo HTML
              y activos como JavaScript y CSS.</h6>
              <h6> Si no ha oído hablar de Static Generation pero ese concepto le suena familiar, es posible que haya oído hablar 
                de él por su nombre más largo Static Site Generation o su acrónimo SSG.</h6>

          <Presente/>
        </div>
      </section>
    </main>
  )
}
