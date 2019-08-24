import React, { Component } from 'react'
import {connect} from 'react-redux';
import './Resultados.css'





class Resultados extends Component {
    render(props) {

        const remora = this.props.clima.estado.urlImagen
        return (
            <div className='resultados-clima' style={{backgroundImage: `url(${remora})`}}>
                <h1 className='nombre-ciudad'>{this.props.clima.estado.nombre}</h1>
                <h1 className='temperatura-actual'>{this.props.clima.estado.temperaturaActual} °C</h1>
                <h2 className='nombre-imagen'>{this.props.clima.estado.autorImagen} - {this.props.clima.estado.tituloImagen}</h2>
                <h2 className='nombre-hora'>{this.props.clima.estado.hora} : {this.props.clima.estado.minutos}
                </h2>
                <h2 className='nombre-fecha'>{this.props.clima.estado.fecha}
                </h2>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    clima: state
})

export default connect(mapStateToProps)(Resultados);