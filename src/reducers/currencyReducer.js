import {SELECT_CURRENCY} from '../constants'

const defaultCurrency = ["USD","EUR"]

const currencyReducer = (currency = defaultCurrency, action) =>{

    const {type, payload} = action

    switch (type){
        case SELECT_CURRENCY: return payload.currency
        default: return currency
    }

}
export default currencyReducer