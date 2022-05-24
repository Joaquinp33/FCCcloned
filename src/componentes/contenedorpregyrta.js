import React from "react";
import "../hojas de estilo/contenedorpregyrta.css";

function Pregyrta(props) {
  return (
    <div className="contenedor-pregunta-respuesta">
      <p className="contenedor-pregunta">{props.pregunta}</p>
      <p className="contenedor-respuesta">{props.respuesta}</p>
    </div>
  );
}

export default Pregyrta;
