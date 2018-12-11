import {dateNormalizer} from '../helper'

export default store  =>  next => action => {
   const {apiCall,payload} = action

    if(!apiCall) return next(action)

    const date = action.payload.date ? action.payload.date : dateNormalizer(new Date())
    const currencyExchange = {}
    payload.defaultCurrency.forEach(function(currency,i){
        console.log(currency,i)
        fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currency}&date=${date}&json`)
        .then(res => res.json())
        .then(response => {currencyExchange[currency]  = response[0].rate})
    });


    return next({...action,
        payload: Object.assign({}, payload, {date:date, currencyExchangeData: currencyExchange})
    })




}

