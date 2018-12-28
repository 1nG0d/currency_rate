import {
        SELECT_CURRENCY,
        SELECT_DATE_RANGE,
        INPUT_QUANTITY,
        GET_EXCHANGE_RATE,
        DEFAULT_RATE_FOR_TODAY,
        INCREMENT,

        START,
        SUCCESS,
        FAILED
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
        dispatch({
            type: DEFAULT_RATE_FOR_TODAY + START
        })
        fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date}&json`)
            .then(resp => resp.json())
            .then(result => {
                setTimeout(()=>
                    dispatch({
                        type: DEFAULT_RATE_FOR_TODAY + SUCCESS,
                        payload: {[dateNormalizer(date)]: result}
                    }), 1000)

            })
            .catch(error =>{
                console.log("Error in loading default data for today")
                dispatch({
                    type: DEFAULT_RATE_FOR_TODAY + FAILED,
                    })
            })
    }
}

export const getExchangeRate = ()=>({
    type: GET_EXCHANGE_RATE,
    apiCall: true
})