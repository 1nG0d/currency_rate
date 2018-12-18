import {
    START,
    SUCCESS,
    FAILED
} from "../constants/index"

export default store  =>  next => action => {
    const {apiCall} = action

    if(!apiCall) return next(action)

    const rangeOfDates = store.getState().selectedRange ? store.getState().selectedRange: new Date()
    const currency = store.getState().currency ? store.getState().currency : ["USD", "EUR"]

    console.log("test moment",store.getState().selectedRange)

    next({type: action.type + START, payload: {range: store.getState().selectedRange } })

    const resArrayOfFetch = []
        rangeOfDates.forEach(date=>{
            currency.forEach(cc=>{resArrayOfFetch.push(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${cc}&date=${date}&json`)})
    })


    Promise.all(resArrayOfFetch.map(url =>
        fetch(url).then(resp => resp.json())
    )).then(
        result => {
            const tmp = {};
            // result.forEach(item => tmp[item[0]['cc']] = item[0]['rate']);
            console.log("123423",result)
            next({
                type: action.type + SUCCESS,
                payload: {date: rangeOfDates, currencyExchangeData: {...tmp}}
            })
        })
}

