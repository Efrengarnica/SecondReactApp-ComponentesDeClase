import './App.css';
import genereishopLogo from './imagenes/Genereishop1.png'
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
import { useState } from 'react'; //Hook uno de los mas usados de React

function App() {
  const [numClics, setNumClics]= useState(0);

  const manejarClic= () => {
    setNumClics(numClics+1);
  };

  const reiniciarContador= () => {
    setNumClics(0);
  };
  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img
          className='genereishop-logo'
          src={genereishopLogo}
          alt='Logo de Genereishop'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClics={numClics}
        />
        <Boton
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}
        />
        <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
        />

      </div>
    </div>
  );
}

export default App;
