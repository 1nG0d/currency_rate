import {
        DEFAULT_RATE_FOR_TODAY,
        GET_EXCHANGE_RATE,
        START,
        SUCCESS,
        FAILED
    } from '../constants'

const exchangeRateDefault= {};

const exchangeRateReducer = (exchangeData = exchangeRateDefault, action) =>{
    const {type,payload} = action
    switch (type){
        case DEFAULT_RATE_FOR_TODAY: return {...payload}

        case GET_EXCHANGE_RATE + START: { console.log("getExchangeRateSTART")}

        case GET_EXCHANGE_RATE + SUCCESS: { console.log("getExchangeRate SUCCESS", payload); return {...payload}}

        case GET_EXCHANGE_RATE + FAILED: { console.log("getExchangeRate", payload);}

        default: return exchangeData
    }

}
export default exchangeRateReducer