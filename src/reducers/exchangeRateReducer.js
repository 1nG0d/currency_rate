import {DEFAULT_RATE_FOR_TODAY} from '../constants'
import {dateNormalizer} from '../helper'
import {Map, Record, List} from 'immutable'


const exchangeRateDefault= {
    date: new Date(),
    currencyExchangeData: {"USD": 0, "EUR" : 0}
}

const exchangeRateReducer = (exchangeDate = exchangeRateDefault, action) =>{
    const {type,payload} = action
    switch (type){
        case DEFAULT_RATE_FOR_TODAY: {
            return { date: payload.date, currencyExchangeData: payload.currencyExchangeData }
        }
    }
    return exchangeDate
}
export default exchangeRateReducer