import React, { useState } from "react";

const ContadorFuncion = () => {
  const [conteo, setConteo] = useState(0);

  const incrementar = () => {
    setConteo((prevConteo) => prevConteo + 1);
  };

  const reducir = () => {
    setConteo((prevConteo) => prevConteo - 1);
  };

  return (
    <div>
      <h1>Contador de clicks de función</h1>
      <p>conteo: {conteo}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={reducir}>Reducir</button>
    </div>
  );
}

export default ContadorFuncion;
