import "./App.css";
import Pregyrta from "../src/componentes/contenedorpregyrta.js";

function App() {
  return (
    <div className="App">
      <p className="fecha">
        24 DE NOVIEMBRE DE 2020 /{" "}
        <a href="https://www.freecodecamp.org/espanol/news/tag/freecodecamp/">
          #FREECODECAMP
        </a>
      </p>
      <h1>Acerca de freeCodeCamp - Preguntas frecuentes</h1>
      <img
        className="imagen-equipo"
        src={require("../src/img/freecodecamp-1-.jpeg")}
        alt="Equipo de FCC"
      />
      <Pregyrta
        pregunta="¿Qué es freeCodeCamp?"
        respuesta="Somos una comunidad sin fines de lucro</a> que te ayuda a aprender a codificar mediante la construcción de proyectos."
      />
      <Pregyrta
        pregunta="¿Cómo puedes ayudarme a aprender a codificar?"
        respuesta="Aprenderás a programar completando desafíos de codificación y construyendo proyectos. También obtendrás certificaciones verificadas en el transcurso del proceso."
      />
      <Pregyrta
        pregunta="¿Es freeCodeCamp realmente gratis?"
        respuesta="Sí. Cada aspecto de freeCodeCamp es 100% gratuito.."
      />
      <Pregyrta
        pregunta="¿Puede freeCodeCamp ayudarme a conseguir un trabajo como desarrollador de software?"
        respuesta="Sí. Cada año, miles de personas que se unen a la comunidad freeCodeCamp obtienen su primer trabajo de desarrollador de software. Si tienes curiosidad, puedes navegar por nuestra red de ex alumnos en LinkedIn aquí."
      />
      <Pregyrta
        pregunta="¿Qué tan grande es la comunidad freeCodeCamp?"
        respuesta="Si sumas a todas las personas que usan nuestra plataforma de aprendizaje, lees nuestra publicación, miras nuestro canal de YouTube y los posts en nuestro foro, cada mes ayudamos a millones de personas a aprender sobre programación y tecnología."
      />
      <Pregyrta
        pregunta="¿Es freeCodeCamp una organización sin fines de lucro?"
        respuesta="Sí, somos una organización benéfica pública apoyada por donantes 501(c)(3). Puede descargar nuestra Carta de Determinación del IRS aquí."
      />
    </div>
  );
}

export default App;

// https://www.freecodecamp.org/espanol/news/acerca-de-freecodecamp-preguntas-frecuentes/
