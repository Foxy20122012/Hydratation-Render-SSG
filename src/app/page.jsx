import Bienvenida from "../components/Ejemplo"
import Usos from "../components/Usos"


export default function Home() {
  return (
    <main>
      <section>
        <div>
          <h1 className='  text-center text-blue-600 text-2xl font-bold text-xl'>BLOG INFORMATIVO</h1>
          <h2 className ='text-yellow-300 2x1 font-bold text-xl'>BLOG POST</h2>
          
          <p> Un blog es una plataforma que incluye contenidos con temas en común, entonces, un blog post se refiere
             a uno de esos contenidos. Son las publicaciones que se realizan en la plataforma con cierta periodicidad, 
             al mismo tiempo, se ordenan de forma cronológica y según la clasificación del tema.
             </p>
             <p>.</p>
             <h2 className ='text-yellow-300 2x1 font-bold text-xl'>¿PARA QUE SIRVE UN BLOG POST?</h2>
             <p>.</p>
             <p>Sirven para que los usuarios o seguidores del portal tengan información sobre el tópico que les interesa y
               que por supuesto está en la línea de la plataforma. Por otro lado, las empresas lo usan para ofrecer temas relacionados
                con su nicho de mercado, para resolver dudas, hacer recomendaciones o informar noticias sobre la empresa.</p>

<p>Asimismo, una buena entrada debe seguir los lineamientos de posicionamiento web o SEO para lograr atraer más tráfico desde buscadores.
   Las publicaciones deben contener un título atractivo, una buena estrategia de palabras clave, imágenes, entre otros elementos.</p>
   <p>.</p>
   <h1 className='  text-center text-blue-600 text-2xl font-bold text-xl'>HYDRATATION, RENDER, SSG</h1>
   <p>.</p>
   <p>La funcion principal del SSG es mostrarle algo al usuario mientras se carga nuestra pagina y nuestra informacion, 
    por el eso mandamos un archivo html.Quiere decir que es el proceso de construir los archivos HTML de un sitio web al 
    momento de hacer un deploy para que cuando un usuario acceda a una página, está este lista para ser mostrada en el navegador.
   </p>
<p>El renderizado es la representación gráfica del contenido de una página, es decir, el proceso necesario para mostrar una página web
   en un navegador.</p>
   <p>.</p>
   <p>Static Site Generation
no se limita solamente a controlar el renderizado, su principal objetivo es dar algo a
la aplicación o página web para mostrar mientras se cargan nuevos elementos como podemos observar en esta pagina se muestra esta informacion para que el usuario
pueda informarse mientras se carga</p>
   <p>.</p>
             
          <Bienvenida/>
        </div>
      </section>
    </main>
  )
}


