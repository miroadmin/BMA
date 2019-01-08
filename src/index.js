import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
//Redux
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Redux Saga
import createSagaMiddleware from 'redux-saga';
// Redux combineReducers
import reducer from './store/reducer';
import reducerA from './store/reducerA';
import reducerB from './store/reducerB';
import reducerM from './store/reducerM';
import reducerS from './store/reducerS';
//Redux applyMiddleware
import thunk from 'redux-thunk';
import {watchAgeUp} from './saga/saga'

// Redux combineReducers
const rootReducer = combineReducers({
    rA:reducerA,
    rB:reducerB,
    rOther:reducer,
    rM:reducerM,
    rS:reducerS
})
const sagaMiddleware = createSagaMiddleware();


//Redux applyMiddleware - good on search error
const logAction = store => {
    return next => {
        return action => {
            const result= next(action);
            console.log(`REDUX Middleware ${JSON.stringify(result)}`);
            return result;
        }
    }
}
//Redux applyMiddleware
const store = createStore(rootReducer, applyMiddleware(thunk, logAction, sagaMiddleware));
sagaMiddleware.run(watchAgeUp);
ReactDOM.render(
//Redux Provider
    <Provider store={store}>
        <BrowserRouter>
                <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

