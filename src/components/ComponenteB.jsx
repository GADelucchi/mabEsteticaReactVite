import React from "react";

const ComponenteB = ({ textoBtn, onClick }) => {

  // const manejarClick = () => {
  //   alert("Clickeaste el ComponenteB");
  // };

  const miValor = "Datos desde ComponenteB";

  return <button onClick={() => {onClick(miValor)}}>{textoBtn}</button>;
};

export default ComponenteB;
