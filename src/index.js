import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
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
    // yield takeLatest ('GET_JSONPLACEHOLDER_POSTS', getJSONPLACEHOLDERPostSaga);
    // yield takeLatest ('GET_JSONPLACEHOLDER_PHOTOS', getJSONPLACEHOLDERPhotoSaga);
    yield takeLatest ('GET_JSONPLACEHOLDER_TODOS', getJSONPLACEHOLDERTodoSaga);
    yield takeLatest ('UPDATE_JSONPLACEHOLDER_TODOS', updateJSONPLACEHOLDERToDoSaga);
    yield takeLatest ('DELETE_JSONPLACEHOLDER_TODOS', deleteJSONPLACEHOLDERToDoSaga);
    yield takeLatest ('POST_JSONPLACEHOLDER_TODOS', postJSONPLACEHOLDERToDoSaga);
}

// generator funtion saga- axios get requestion to server- sends user selected number in url to parse
// via req.query on server side
// on successful try, will set reducer to response (result.data) from server
// function * getJSONPLACEHOLDERPostSaga(action){
//     // console.log('in getJSONPLACEHOLDERPostSaga');
//     // console.log('Payload is', action.payload);
//     try{
//         const response = yield axios.get(`/api/jsonplaceholder/posts?selected_number=${action.payload}`);
//         // console.log('Response is', response);
//         yield put({type: 'SET_JSONPLACEHOLDER', payload: response.data});
//     }
//     catch (error) {
//         console.log("ERROR IN GET", error);
//         alert(`Sorry! Unable to get data based on selected number. Try again later!`);
//     }
// }

// function * getJSONPLACEHOLDERPhotoSaga(action){
//     //console.log('in getJSONPLACEHOLDERPhotoSaga');
//     // console.log('Payload is', action.payload);
//     try{
//         const response = yield axios.get(`/api/jsonplaceholder/photos?selected_number=${action.payload}`);
//         // console.log('Response is', response);
//         yield put({type: 'SET_JSONPLACEHOLDER', payload: response.data});
//     }
//     catch (error) {
//         console.log("ERROR IN GET", error);
//         alert(`Sorry! Unable to get data based on selected number. Try again later!`);
//     }
// }

// GeneratorFunction Saga- GET method to api endpoint to GET data-limited to first 50 JSON objects
function * getJSONPLACEHOLDERTodoSaga(action){
    //console.log('in getJSONPLACEHOLDERPhotoSaga');
    // console.log('Payload is', action.payload);
    try{
        //change axios.get route to be done on client side (can be change to user server-side router but 
        //shows that api request can be done on client side through saga to same api endpoint)
        const response = yield  axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=50`)
        // const response = yield axios.get(`/api/jsonplaceholder/todos`);
        // console.log('Response is', response);
        yield put({type: 'SET_JSONPLACEHOLDER', payload: response.data});
    }
    catch (error) {
        console.log("ERROR IN GET", error);
        alert(`Sorry! Unable to get data. Try again later!`);
    }
}

// GeneratorFunction Saga- PUT method to api endpoint to update task item completion
function* updateJSONPLACEHOLDERToDoSaga(action){
    // console.log('in updateJSONPLACEHOLDERToDoSaga', action.payload);
    let updatedItem = {userId: action.payload.userId, 
                        id: action.payload.id, 
                        title: action.payload.title, 
                        completed:action.payload.completed}
    try{
        const response = yield axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedItem.id}`, updatedItem);
        //If using database would want to do a GET for most updated information
        // yield put({type:'GET_JSONPLACEHOLDER_TODOS'})
        console.log('PUT Response is', response);
    }
    catch (error) {
        console.log("ERROR IN PUT", error);
        alert(`Sorry! Unable to update task. Try again later!`);
    }
}

// GeneratorFunction Saga- DELETE method to api endpoint to delete task item based on item id
function* deleteJSONPLACEHOLDERToDoSaga(action){
    // console.log('in deleteJSONPLACEHOLDERToDoSaga', action.payload);
    let deletedItem = action.payload;
    // console.log('deletedItem is: ', deletedItem);
    try{
        const response = yield axios.delete(`https://jsonplaceholder.typicode.com/todos/${deletedItem}`);
        console.log('DELETE Response is', response);
        //If using database would want to do a GET for most updated information
        // yield put({type:'GET_JSONPLACEHOLDER_TODOS'})
    }
    catch (error) {
        console.log('ERROR IN DELETE', error);
        alert(`Sorry! Unable to delete task. Try again later!`)
    }
}

// GeneratorFunction Saga- POST method to api endpoint to create task item based on user inputted task- set automatically to not completed and to userId=1
// this could be changed if authentication was available
function* postJSONPLACEHOLDERToDoSaga(action){
    // console.log('in postJSONPLACEHOLDERToDoSaga');
    let postedItem =  {
                    "userId": 1,
                    "title": action.payload,
                    "completed": false
                    }
    try{
        const response = yield axios.post(`https://jsonplaceholder.typicode.com/todos`, postedItem);
        console.log('POST Response is:', response);
    }
    catch (error) {
        console.log('ERROR in PUT', error);
        alert(`Sorry! Was unable to add task. Try again later!`)
    }
}

//reducer set to hold data received from axios get request
//default set to object unless action.type is met
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
