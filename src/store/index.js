import {createStore, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from '../reducers'
import { actionsSuffix } from "../helper";

// disable api and will use promise-middleware instead.
const enhancer = applyMiddleware(
    promiseMiddleware({
        promiseTypeSuffixes: actionsSuffix,
    }),
    createLogger({
        collapsed: true,
        // Convert immutable to JSON.
        stateTransformer: state => JSON.parse(JSON.stringify(state)),
    })
);

const store = createStore(reducer, enhancer);

export default  store;
