import React, { Component } from 'react';
import Imagen from './Imagen';

class Resultado extends Component {

    mostrarImagenes = () => {

        const imagenesRecibidas = this.props.imagenes;

        if(imagenesRecibidas.length === 0) {
            return null;
        }

        console.log( imagenesRecibidas );

        return (
            <div className="col-12 p-5 row">
                { imagenesRecibidas.map( imagenRecibida => (
                    <Imagen 
                        key = { imagenRecibida.id }
                        imagen = { imagenRecibida }
                    />
                ))}
            </div>
        );
        
    }

    render() {
        return (
            <div>
                { this.mostrarImagenes() }
            </div>
        );
    }
}

export default Resultado;