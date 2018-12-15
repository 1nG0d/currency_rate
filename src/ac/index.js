import {SELECT_CURRENCY,
        SELECT_DATE,
        INPUT_QUANTITY,
        CALCULATE,
        GET_EXCHANGE_RATE,
        //DEFAULT_RATE_FOR_TODAY
        } from '../constants'
import {dateNormalizer} from "../helper/index"

export const selectCurrencyAction = (currency) =>({
    type: SELECT_CURRENCY,
    payload: {currency}
})

export const selectDateAction =(date) =>({
    type: SELECT_DATE,
    payload: {date}
})

export const inputQuantityAction = (quantity) =>({
    type: INPUT_QUANTITY,
    payload: {quantity}
})

export const resultCalculation = (exchangeRange, quantity) =>({
    type: CALCULATE,
    payload: {exchangeRange, quantity}
})

//export const getExchangeRate = (currency,date)=>({
//    type: GET_EXCHANGE_RATE,
//    apiCall: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currency}&date=${date}&json`
//})


export const defaultRateForToday=(defaultCurrency)=> {

    const date = dateNormalizer(new Date())

    return function (dispatch, getState) {

        Promise.all(defaultCurrency.map(currency =>
            fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currency}&date=${date}&json`).then(resp => resp.json())
        )).then(
            result => {
                const tmp = {};
                result.forEach(item => tmp[item[0]['cc']] = item[0]['rate']);
                console.log('result is:', tmp);
                dispatch({
                    type:"DEFAULT_RATE_FOR_TODAY",
                    payload: {date: date, currencyExchangeData: {...tmp}}
                })
            })
    }
}


export const getExchangeRate = (currency,date)=>({
    type: GET_EXCHANGE_RATE,
    payload: {currency,date},
    apiCall: true

})