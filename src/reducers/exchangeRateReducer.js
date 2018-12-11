import {DEFAULT_RATE_FOR_TODAY} from '../constants'
import {dateNormalizer} from '../helper'
import {Map, Record, List} from 'immutable'


const exchangeRateRecord = Record({
    date: "",
    currencyExchangeData: {"USD": 0, "EUR" : 0}
})

const exchangeRatesRecord = []

const exchangeRateReducer = (exchangeDate = exchangeRatesRecord, action) =>{

    const {type,payload} = action

    switch (type){
        case DEFAULT_RATE_FOR_TODAY: {
            console.log("1111",action.payload)
            const exchangeItem = new exchangeRateRecord()
            return exchangeDate.concat(exchangeItem.set('date',payload.date).set("currencyExchangeData",payload.currencyExchangeData))
        }
    }
    return exchangeDate
}
export default exchangeRateReducer