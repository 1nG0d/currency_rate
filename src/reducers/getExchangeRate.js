import {
        GET_EXCHANGE_RATE,
        START,
        SUCCESS,
        FAILED
        } from '../constants'

const exchangeRateDefault = {}

const getExchangeRate = (exchangeRate = exchangeRateDefault, action)=>{
    const {type, payload} = action

    switch(type){
        case GET_EXCHANGE_RATE + START: { console.log("getExchangeRate", payload); return exchangeRate}
        case GET_EXCHANGE_RATE + SUCCESS: { console.log("!!!!getExchangeRate success", payload); return exchangeRate}
    }
    return exchangeRate
}
export default getExchangeRate