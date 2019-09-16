import React, { Component } from 'react';
import Buscador from './componentes/Buscador'
import Resultado from './componentes/Resultado';

class App extends Component {
  
  state = {
    terminoState: '',
    imagenesState: []
  }

  consultarApi = () => {
    
    const terminoBusqueda = this.state.terminoState;

    const url = `https://pixabay.com/api/?key=13637572-2ce9ee79e5abb9578ce725977&q=${ terminoBusqueda }&per_page=30`;

    console.log( url );
    fetch( url )
      .then( respuesta => respuesta.json() )
      .then( resultado => this.setState( { imagenesState : resultado.hits } ) );
      //.then( resultado => console.log( resultado.hits ));
  }

  datosBusqueda = (termino) => {
    console.log('Desde APP ' + termino);
    this.setState({
      terminoState: termino
    }, () => {
      this.consultarApi();
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
        {/* this.state.terminoState */}

        <Resultado 
          imagenes={ this.state.imagenesState}
        />
      </div>
    );
  }
}

export default App;
