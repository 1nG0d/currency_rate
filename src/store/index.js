import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducers'
import logger from '../midlewares/logger'
import api from '../midlewares/api'

const enhancer = applyMiddleware(api,logger)
const store = createStore(reducer,enhancer)

export default  store;

window.store = store