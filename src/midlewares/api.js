import {
    START,
    SUCCESS,
    FAILED
} from "../constants/index"
import {dateNormalizerForApiStyle} from "../helper/index"

export default store  =>  next => action => {
    const {apiCall} = action
    if(!apiCall) return next(action)

    const rangeOfDates = store.getState().selectedRange ? store.getState().selectedRange : [new Date()]

    const currency = store.getState().currency ? store.getState().currency : ["USD", "EUR"]


    next({type: action.type + START})


    Promise.all(rangeOfDates.map((date)=>fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date}&json`).then(resp => resp.json())))
        .then(response => {

            const responseInObj = response.reduce((acc, cur, i)=>{
                const key = dateNormalizerForApiStyle(cur[0].exchangedate);
                acc[key] = cur
                return acc
            },{});

            next({type: action.type + SUCCESS, payload: responseInObj })
        })


        .catch((error) =>
            next({type: action.type + FAILED})
        )
}

