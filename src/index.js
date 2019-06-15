import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeLatest, put} from 'redux-saga/effects';


//watcher saga to take in dispatches
function* watcherSaga() {
    yield takeLatest ('GET_JSONPLACEHOLDER', getJSONPLACEHOLDERSaga)
}

function * getJSONPLACEHOLDERSaga(action){
    console.log('in getJSONPLACEHOLDERSaga');
    try{
        const response = yield axios.get(`/api/jsonplaceholder?selected_number=${action.payload}`);
        console.log('Response is', response);
        // yield put({type: 'SET_JSONPLACEHOLDER', payload: response.data});
    }
    catch (error) {
        console.log("ERROR IN GET", error);
        //add alert
    }
}

const JSONPLACEHOLDERReducer = (state = {}, action) =>{
    if(action.type === 'SET_JSONPLACEHOLDER') {
        return action.payload
    }
    return state;
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        JSONPLACEHOLDERReducer
    }),
    // Add sagaMiddleware to store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into sagaMiddleware
sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App/></Provider>, 
    document.getElementById('root'));
