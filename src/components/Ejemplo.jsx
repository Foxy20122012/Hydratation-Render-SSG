"use client";

import React from "react";
import { useHasMounted } from "../hooks/useHasMounted";
import { useRouter } from "next/navigation";

export default function Bienvenida() {
  const router = useRouter();
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return <h1>...Procesando...</h1>;
  }

  const user = "Welcome to blog";

  if (user) {
    return (
      <div>
        <h1>{user}</h1>
        <div>
        <h1 className='  text-center text-blue-600 text-2xl font-bold text-xl'>EJEMPLO</h1>
        <p>.</p>
        <p>En esta parte se presenta nuestra pagina ya cargada. mientras este proceso se ejecutaba se mostraba contenido al usuario
          para que este tuviera algo que obeserva mientras se ejecutaba el proceso. Para que el usuario no observara el lienzo o pantalla 
          en blanco mientras este proceso ocurria. Este mismo formato de ejemplo se estara formando en nuestras demas paginas y al final 
          al pie de cada pagina se implementará un boton para poder regresar a esta pagina denominada Home.
         
        </p>
        <p>.</p>
          <button type="button" onClick={() => router.push("/about")}>
            Go to about
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>No hay nada en el user</div>;
      <button type="button" onClick={() => router.push("/")}>
        Dashboard
      </button>
    </div>
  );
}
