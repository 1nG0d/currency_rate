import {GET_EXCHANGE_RATE} from '../constants'

const exchangeRateDefault = 0

const getExchangeRate = (exchangeRate = exchangeRateDefault, action)=>{
    const {type, payload} = action

    switch(type){
        case GET_EXCHANGE_RATE: return payload
    }
    return exchangeRate
}
export default getExchangeRate