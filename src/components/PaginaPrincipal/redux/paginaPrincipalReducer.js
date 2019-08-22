const initialState = {
    nombre: '',
    temperaturaActual: '',
    autorImagen: '',
    tituloImagen:'',
    urlImagen:''
}

const paginaPrincipalReducer = (state=initialState, action) => {
    const estado = {...state}
    switch(action.type){
        case 'EJECUTANDO_COORDENADAS':
            console.log(action.value)
            estado.nombre = action.value.name;
            estado.temperaturaActual = action.value.main.temp;
            break
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