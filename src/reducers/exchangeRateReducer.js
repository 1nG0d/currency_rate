import {DEFAULT_RATE_FOR_TODAY} from '../constants'
import { SUCCESS } from "../helper";

const exchangeRateDefault= {
    date: new Date(),
    currencyExchangeData: {"USD": 0, "EUR" : 0}
};

const exchangeRateReducer = (state = exchangeRateDefault, action) =>{
    const {type,payload} = action;
    switch (type){
        case `${DEFAULT_RATE_FOR_TODAY}_${SUCCESS}`: {
            return {
                date: payload.date,
                currencyExchangeData: { ...state.currencyExchangeData,...payload.currencyExchangeData }
            }
        }
    }
    return state
};
export default exchangeRateReducer