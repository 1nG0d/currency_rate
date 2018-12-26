import {
        SELECT_CURRENCY,
        SELECT_DATE_RANGE,
        INPUT_QUANTITY,
        GET_EXCHANGE_RATE,
        DEFAULT_RATE_FOR_TODAY,
        INCREMENT
        }from '../constants'

import {dateNormalizer} from "../helper/index"


export const increment = () =>({
    type: INCREMENT,
})
export const selectCurrencyAction = (currency) =>({
    type: SELECT_CURRENCY,
    payload: {currency}
})

export const selectDateAction =(dateRange) =>({
    type: SELECT_DATE_RANGE,
    payload: {dateRange},
})

export const inputQuantityAction = (quantity) =>({
    type: INPUT_QUANTITY,
    payload: {quantity}
})

export const defaultRateForToday=()=> {
    const date = dateNormalizer(new Date())
    return function (dispatch) {
        fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date}&json`)
            .then(resp => resp.json())
            .then(result => {
                dispatch({
                    type: DEFAULT_RATE_FOR_TODAY,
                    payload: {[dateNormalizer(date)]: result}
                })
            })
    }
}

export const getExchangeRate = ()=>({
    type: GET_EXCHANGE_RATE,
    apiCall: true
})