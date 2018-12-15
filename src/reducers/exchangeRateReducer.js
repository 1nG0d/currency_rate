import {DEFAULT_RATE_FOR_TODAY} from '../constants'

const exchangeRateDefault= {
    date: new Date(),
    currencyExchangeData: {"USD": 0, "EUR" : 0}
}

const exchangeRateReducer = (exchangeDate = exchangeRateDefault, action) =>{
    const {type,payload} = action
    switch (type){
        case DEFAULT_RATE_FOR_TODAY: {
            return { ...payload }
        }

        default: return exchangeDate
    }

}
export default exchangeRateReducer