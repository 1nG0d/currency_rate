import {combineReducers} from 'redux'

import currencyReducer from './currencyReducer'
import dateSelectedReducer from './dateSelectedReducer'
import quantityInputReducer from './quantityInputReducer'
import calculateResultReducer from './calculateResultReducer'
//import getExchangeRate from './getExchangeRate'
import exchangeRateReducer from './exchangeRateReducer'


export default combineReducers({
    currency : currencyReducer,
    selectedRange: dateSelectedReducer,
    quantity: quantityInputReducer,
    result: calculateResultReducer,
    exchangeData: exchangeRateReducer
})