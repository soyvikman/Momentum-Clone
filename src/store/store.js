import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './../reducer/rootReducer';
import rootSaga from './../saga/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default store;