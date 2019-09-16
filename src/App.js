import React, { Component } from 'react';
import Buscador from './componentes/Buscador'
import Resultado from './componentes/Resultado';

class App extends Component {
  
  state = {
    terminoState: '',
    imagenesState: [],
    paginaState: 1
  }

  // metodo que lleva después de elegir cualquier boton de paginación, hacia el jumbotron 
  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  paginaAnterior = () => {
    // leer el state de la pagina actual
    let pagina = this.state.paginaState;

    // leer si la pagina es uno 
    if (pagina === 1) {
      return null;
    }

    // restar uno a la pagina actual
    pagina--;

    // agregar el cambio al state, CUANDO SE HACEN CAMBIOS AL STATE, PARA EJECUTAR UNA FUNCION
    // SE TIENE QUE EJECUTAR EL CALLBACK CON UNA FUNCIÓN DE FLECHA COMO LA QUE SE MUESTRA 
    this.setState({
      paginaState: pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });

    console.log('Anterior... ' + pagina);
  }
  
  paginaSiguiente = () => {
    // leer el state de la pagina actual
    let pagina = this.state.paginaState;

    // sumar uno a la pagina actual
    pagina++;

    // agregar el cambio al state, CUANDO SE HACEN CAMBIOS AL STATE, PARA EJECUTAR UNA FUNCION
    // SE TIENE QUE EJECUTAR EL CALLBACK CON UNA FUNCIÓN DE FLECHA COMO LA QUE SE MUESTRA
    this.setState({
      paginaState: pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });

    console.log('Siguiente... ' + pagina);
  }

  consultarApi = () => {
    
    const terminoBusqueda = this.state.terminoState;
    const pagina = this.state.paginaState;

    const url = `https://pixabay.com/api/?key=13637572-2ce9ee79e5abb9578ce725977&q=${ terminoBusqueda }
                  &per_page=30
                  &page=${ pagina }`;

    console.log( url );
    fetch( url )
      .then( respuesta => respuesta.json() )
      .then( resultado => this.setState( { imagenesState : resultado.hits } ) );
      //.then( resultado => console.log( resultado.hits ));
  }

  datosBusqueda = (termino) => {
    console.log('Desde APP ' + termino);
    this.setState({
      terminoState: termino,
      pagina: 1
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
        <div className="row text-center">
          <Resultado 
            imagenes={ this.state.imagenesState }
            paginaAnterior  = { this.paginaAnterior }
            paginaSiguiente = { this.paginaSiguiente }
          />
        </div>
      </div>
    );
  }
}

export default App;
