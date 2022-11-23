"use client";

import React from "react";
import { useHasMounted } from "../hooks/useHasMounted";
import { useRouter } from "next/navigation";

export default function Bienvenida() {
  const router = useRouter();
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return <h1>Cargando...</h1>;
  }

  const user = "Welcome to blog";

  if (user) {
    return (
      <div>
        <h1>{user}</h1>
        <div>
          <h1>Esto es un div</h1>
          <button type="button" onClick={() => router.push("/about")}>
            Llevame al about
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
