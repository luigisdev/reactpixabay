import React from 'react';
import Buscador from './componentes/Buscador'

function App() {
  return (
    // className se utiliza en javascript para dar estilos, ya que class es una palabra reservada del lenguaje
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imágenes</p>
        
        <Buscador />
      </div>
    </div>
  );
}

export default App;
