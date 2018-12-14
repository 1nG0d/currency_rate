import {dateNormalizer} from '../helper'

export default store  =>  next => action => {
   const {apiCall,payload} = action;

    if(!apiCall) return next(action);

    const date = action.payload.date ? action.payload.date : dateNormalizer(new Date())
    const currencyExchange = {}
    payload.defaultCurrency.forEach(function(currency,i){
        console.log(currency,i)
        fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currency}&date=${date}&json`)
        .then(res => res.json())
        .then(response => {currencyExchange[currency]  = response[0].rate})
    });

   // in this moment we dispatch empty object, and because of that we have problem with update store

    // if you want to save this logic, you may use Promise.all and dispatch result response
    // or with forEach and dispatch on every response. I did in this way(forEach).
    // but you should dispatch only on success.
    return next({...action,
        payload: Object.assign({}, payload, {date:date, currencyExchangeData: currencyExchange})
    })




}

