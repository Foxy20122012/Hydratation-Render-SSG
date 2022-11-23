"use client";

import React from "react";
import { useHasMounted } from "../hooks/useHasMounted";
import { useRouter } from "next/navigation";

export default function Presente() {
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

        <p>.</p>
        <p>ESTE ES EL EJEMPLO DEL ABOUT
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
             <h1 className='  text-center text-black-600 text-2xl font-bold text-xl'>QUE SUCEDE DURANTE LA GENERACIÓN ESTATICA</h1>
             <h2>Las aplicaciones web basadas en JavaScript, como las conocemos tradicionalmente, funcionan ejecutando bibliotecas como 
              React o scripts en tiempo de ejecución en el navegador.</h2>
              <p> Cuando el navegador recibe la página, generalmente es HTML simple sin mucho contenido. Esto luego carga los scripts para 
                extraer el contenido de la página, un proceso también conocido como hidratación.</p>
                <p> Con Static Generation, herramientas como Next.js intentan representar esa página casi como lo haría en el navegador pero
                   en tiempo de compilación. Esto nos da la capacidad de servir todo el contenido en la primera carga. Los scripts aún hidratan 
                   la página durante este proceso, pero idealmente con menos cambios o sin cambios.</p>
                   <p>.</p>
                   <p> en cada pestaña se muestra un ejemplo de carga. Se muestra contenido mientras se carga el resto de la información y cada 
                    pagina cuenta con un botón para poder regresar a la pestaña Home y en la misma pestaña Home se muestra en la parte inferior
                     situada de lado izquierdo para poder dirijirse al about. </p>
                     <p>.</p>
      <button type="button" onClick={() => router.push("/")}>
        Go to Home
      </button>
    </div>
  );
}
