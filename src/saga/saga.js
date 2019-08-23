import {takeLatest, put, delay} from 'redux-saga/effects';
import axios from 'axios'

function* coordenadas(value){
   
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=`+value.value.latitude+`&lon=`+value.value.longitude+`&APPID=79ca51641055528c7f610557fc8f83e6&units=metric`
    const data = yield(axios.get(url))
    console.log(data)
    yield delay(1000)
    yield put({type:'EJECUTANDO_COORDENADAS', value: data.data})
}

function* imagenes(){
    const urlNasa = `https://api.nasa.gov/planetary/apod?api_key=AGNcjPmUQbXuZjY8VCEdPpPmqj8YTgJ2VwJjCzBU`
    const datosNasa = yield(axios.get(urlNasa))
    yield put ({type:'EJECUTANDO_NASA', value:datosNasa})
}

function* rootSaga(){
    yield takeLatest('COORDENADAS_SAGA', coordenadas )
    yield takeLatest('IMAGENES_NASA', imagenes)
}

export default rootSaga