
import Welcome from "../../components/Example"

export default function Home() {
  return (
    <main>
      <section>
        <div>
          <h3 className='  text-center text-blue-600 text-2xl font-bold text-xl '>INFORMACIÓN SOBRE LOS POSTS</h3>
          <h2 className ='text-yellow-300 2x1 font-bold text-xl'>¿RECOMENDACIONES PARA UN BUEN POSTS?</h2>
          <p>.</p>
          <p>Un elemento que ayuda mucho en la producción de contenido para blogs es tener una
             estructura predeterminada de publicaciones. Aprende cómo hacer esa planificación y
              cómo esto ayuda en la productividad y en la calidad</p>

              <p>La estructura de un post está compuesta por un conjunto de elementos y pasos 
                necesarios no sólo para que el autor organice mejor el contenido, sino también
                 para mejorar la productividad del material y la experiencia del usuario, logrando 
                 así una lectura mucho más dinámica. Algunos elemntos basicos de un posts son:
                  Título + Resumen 
                  Introducción
                  Cierre.
                  
                  </p>
                  <p>.</p>

          <Welcome/>
        </div>
      </section>
    </main>
  )
}
