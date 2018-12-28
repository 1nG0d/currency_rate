import {
        DEFAULT_RATE_FOR_TODAY,
        GET_EXCHANGE_RATE,
        START,
        SUCCESS,
        FAILED
    } from '../constants'

const exchangeRateDefault= {
    loading: false,
    loaded: false,
    entities: {}
};

const exchangeRateReducer = (exchangeData = exchangeRateDefault, action) =>{
    const {type,payload} = action
    switch (type){
        case DEFAULT_RATE_FOR_TODAY + START: return {
            loading: true,
            loaded: false,
            entities: {...payload}
        }
        case DEFAULT_RATE_FOR_TODAY + SUCCESS: return {
            loading: false,
            loaded: true,
            entities: {...payload}
        }

        case DEFAULT_RATE_FOR_TODAY + FAILED: {
            console.log('||', action.error)
            return exchangeData
        }

        case GET_EXCHANGE_RATE + START: return Object.assign(exchangeData,{loading:true})

        case GET_EXCHANGE_RATE + SUCCESS: return {
            loading: false,
            loaded: true,
            entities: {...payload},
        }

        case GET_EXCHANGE_RATE + FAILED: {
            console.log('||', action.error)
            return exchangeData
        }

        default: return exchangeData
    }

}
export default exchangeRateReducer