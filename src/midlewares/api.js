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



    Promise.all(rangeOfDates.map(date =>
        fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date}&json`)
            .then(resp => resp.json()))
    ).then(result => {
        console.log("res11",result);
    })

}

