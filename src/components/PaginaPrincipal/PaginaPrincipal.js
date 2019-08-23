import React, { Component } from 'react'
import {connect} from 'react-redux';
import store from './../../store/store'


class PaginaPrincipal extends Component {

    
    componentDidMount(){
        
        function success(data){
            store.dispatch({type:'COORDENADAS_SAGA', value : {latitude: data.coords.latitude, longitude: data.coords.longitude}})
            store.dispatch({type: 'IMAGENES_NASA'})
        }

        function error(){
            alert('Please allow the geolocation')
        }
        
        navigator.geolocation.getCurrentPosition(success, error)
        
    }
    
    render(props) {
        console.log(this.props)
        return (
            <div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    estado: state
})



export default connect(mapStateToProps)(PaginaPrincipal)