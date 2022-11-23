"use client";

import React from "react";
import { useHasMounted } from "../hooks/useHasMounted";
import { useRouter } from "next/navigation";

export default function Welcome() {
  const router = useRouter();
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return <h1>...Procesando...</h1>;
  }

  const user = "";

  if (user) {
    return (
      <div>
        <h1>{user}</h1>
        <div>
        <h1 className='  text-center text-blue-600 text-2xl font-bold text-xl'>WELCOME</h1>
        <p>.</p>
        <p>ESTO ES UN EL EJEMPLO DEL POSTS
        </p>
        <p>.</p>
          <button type="button" onClick={() => router.push("/")}>
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
       <h1 className='  text-center text-blue-600 text-2xl font-bold text-xl'>TÍTULO + RESUMEN</h1>
      <p>.</p>

      <p>El título del post es lo que determina si las personas van a hacer clic en el enlace de tu contenido
         o no. Una de las cosas que recomendamos es que sólo pienses en tu título después de escribir el texto,
          para no causar una ruptura en la expectativa. Una vez que el artículo esté listo, es más fácil crear
           un titular que esté bien relacionado al contenido y que, además, sea atractivo. Lo mismo vale para 
           el resumen (aquella frase utilizada justo debajo del título para explicar mejor la idea de la publicación).
           </p>

           <p>.</p>
          
          <p>Una sugerencia importante es que puedes utilizar títulos y resúmenes diferentes para los distintos canales
             que utilices en la divulgación de tu post. Si utilizas WordPress, puedes utilizar el plugin de Yast para ese
              fin. Este permite utilizar un título y un resumen para SEO (Search Engine Optimization u Optimización para el
               Motor de Búsqueda), otro para el blog y otro además para redes sociales.
               </p> 

               <p>.</p>

               <p>¿Por qué eso es importante? Porque de esa manera es posible optimizar los títulos para la palabra clave con
                 enfoque en la búsqueda de Google (que generalmente requieren ser más cortos), así como títulos más largos y
                  un poco más llamativos para redes sociales.</p>

                 
                  <p>.</p>
                  <h1 className='  text-center text-blue-600 text-2xl font-bold text-xl'>INTRODUCCIÓN</h1>
                  <p>.</p>
                  <p> Nunca subestimes las primeras palabras de un texto, pues haber logrado que el usuario haya
                     hecho clic para acceder a tu contenido no significa que leerá el artículo. Por eso, la introducción
                      de tu post necesita hacer que el lector se identifique con el tema que estás planteando.</p>
                      <p> Si no presentas el contenido de manera atractiva – aunque tenga mucha calidad – todo el trabajo
                         de levantamiento de información y el desarrollo del contenido se puede echar a perder, teniendo en 
                         cuenta que no lograrás que el lector se quede en la página.</p>

                         <p>Aún así, sabemos que muchas veces, empezar un texto puede ser una de las partes más difíciles del
                             proceso de producción. Por eso, puedes empezarlo usando:</p>
                             <p>.</p>

                             <p>Estadísticas</p>
                             <p>Una pregunta</p>
                             <p>Analogía</p>
                             <p>Cita</p>
                             <p>Contar un cuento</p>
                             <p>Una frase polémica o controvertida</p>
                             <p>.</p>
                             <h1 className='  text-center text-blue-600 text-2xl font-bold text-xl'>CIERRE</h1>
                             <p>.</p>
                             <p> Tras producir el contenido, hace falta terminarlo. Y no creas que, por haberte empeñado
                                 hasta ahora, podrás escribir cualquier cosa al final de tu texto, dejando esa sensación 
                                 de que ha faltado algo, como aquella película o libro que no cuenta muy bien el final de 
                                 la historia.</p>
                                 <p>.</p>
                                 <p>Por eso, concluye bien tu contenido. Aquí en RD Station, es muy común que usemos un capítulo
                                     de «conclusión» para cerrar el texto, atar bien las ideas y sugerir acciones a partir de los 
                                     aprendizajes del contenido. La idea es recapitular lo que se ha dicho y reforzar el objetivo
                                      principal del artículo.</p>
                                      <p>.</p>
      <button type="button" onClick={() => router.push("/")}>
     Go to Home
      </button>
    </div>
  );
}
