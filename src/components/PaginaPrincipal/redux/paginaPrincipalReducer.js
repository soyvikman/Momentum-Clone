const initialState = {
    nombre: '',
    temperaturaActual: '',
    autorImagen: '',
    tituloImagen:'',
    urlImagen:'',
    hora:'',
    fecha:''

}

const paginaPrincipalReducer = (state=initialState, action) => {
    const estado = {...state}
    switch(action.type){
        case 'EJECUTANDO_COORDENADAS':
            estado.nombre = action.value.name;
            estado.temperaturaActual = action.value.main.temp;
            estado.hora = new Date().getUTCHours();
            estado.minutos = new Date().getUTCMinutes();
            estado.hora = ("0" + estado.hora).slice(-2);
            estado.minutos = ("0" + estado.minutos).slice(-2);
            const options = {
                weekday:'long', year:'numeric', month:'long', day:'numeric'
            }
            const today = new Date()
            estado.fecha = today.toLocaleDateString('en-US', options)
            break;
        case 'EJECUTANDO_NASA':
            console.log(action.value)
            estado.autorImagen = action.value.data.copyright;
            estado.tituloImagen = action.value.data.title;
            estado.urlImagen = action.value.data.url;
            break
        default:
            return estado
    }
    return estado
}

export default paginaPrincipalReducer