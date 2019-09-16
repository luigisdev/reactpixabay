import React, { Component } from 'react';

class Resultado extends Component {

    mostrarImagenes = () => {

        const imagenesRecibidas = this.props.imagenes;

        if(imagenesRecibidas.length === 0) {
            return null;
        }

        console.log( imagenesRecibidas );

        return (
            <React.fragment>
                <div className="col-12 p-5 row">
                    
                </div>
            </React.fragment>
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