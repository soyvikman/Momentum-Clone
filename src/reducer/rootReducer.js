import {combineReducers} from 'redux';
import paginaPrincipalReducer from './../components/PaginaPrincipal/redux/paginaPrincipalReducer';

const rootReducer = combineReducers({
    estado : paginaPrincipalReducer
})

export default rootReducer;