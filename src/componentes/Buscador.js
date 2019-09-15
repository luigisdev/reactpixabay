import React, { Component } from 'react';

class Buscador extends Component {
    
    // createRef() permite leer los valores de los inputs con react
    busquedaRef = React.createRef();

    // funcion para obtener datos
    obtenerDatos = (e) => {
        e.preventDefault();
        console.log('Desde el buscador ' + this.busquedaRef.current.value);

        // Tomamos el valor del input
        const termino = this.busquedaRef.current.value;
        
        // Se envía el valor del input al componente principal
        this.props.datosBusqueda(termino);
    }
    
    render() {
        return (
            //el evento onSubmit pertenece a react y es para mandar los datos al darle clic al boton submit
            <form onSubmit={ this.obtenerDatos }>
                <div className="row">
                    {/* 
                        con el props se reciben los datos desde otro componente 
                        solo se pueden pasar props del componente principal al hijo
                    */}
                    {/* this.props.mensaje */}
                    <div className="form-group col-md-8">
                        <input  ref={ this.busquedaRef }
                                type="text" 
                                className="form-control form-control-lg"
                                placeholder="Busca tu imagen..." 
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <input  type="submit" 
                                className="btn btn-lg btn-danger btn-block"
                                value="Buscar" 
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;