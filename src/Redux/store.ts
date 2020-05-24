import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import createSagaMiddleware from 'redux-saga';

import { reducer } from "./D_reducers";

import sagas from './F_sagas';

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    ));

sagaMiddleware.run(sagas)