import React, { Component } from 'react';
import Buscador from './componentes/Buscador'

class App extends Component {
  
  state = {
    terminoState: 'Café'
  }

  datosBusqueda = (termino) => {
    console.log('Desde APP ' + termino);
    this.setState({
      terminoState: termino
    });
  }

  render() {
    return (
      // className se utiliza en javascript para dar estilos, ya que class es una palabra reservada del lenguaje
      <div className="container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imágenes</p>

          <Buscador 
            datosBusqueda={ this.datosBusqueda }
          />
        </div>
        { this.state.terminoState }
      </div>
    );
  }
}

export default App;
