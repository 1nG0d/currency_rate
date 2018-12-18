import {
        DEFAULT_RATE_FOR_TODAY,
        GET_EXCHANGE_RATE,
        START,
        SUCCESS,
        FAILED
    } from '../constants'

const exchangeRateDefault= {
    date: new Date(),
    currencyExchangeData: {"USD": 0, "EUR" : 0}
}

const exchangeRateReducer = (exchangeData = exchangeRateDefault, action) =>{
    const {type,payload} = action
    switch (type){
        case DEFAULT_RATE_FOR_TODAY: {
            return { ...payload }
        }
        case GET_EXCHANGE_RATE + START: { console.log("getExchangeRate", payload); return exchangeData}

        default: return exchangeData
    }

}
export default exchangeRateReducer