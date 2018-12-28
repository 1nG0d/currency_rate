import { createSelector } from 'reselect'
import {dateHumanReadable,normalizerForChart} from '../helper'

export const currencySelector = (state) => state.currency
export const quantitySelector = (state) => state.quantity

// V1

export const exchangeDataSelector = (state) => state.exchangeData.entities
export const exchangeLoadedSelector = (state) => state.exchangeData.loaded
export const dateSelector = (_,props) => props.date

export const createCurrencyExchangeData = () =>{
    return createSelector(
        exchangeLoadedSelector,
        currencySelector,
        exchangeDataSelector,
        dateSelector,
        (loaded,currencyArray,exchangeData,date)=>{
            let result = [];
            if (loaded){
                const tmpArr = exchangeData[date].slice();
                const obj = exchangeData[date].reduce(function(acc, cur, i) {
                    acc[cur.cc] = cur;
                    return acc;
                }, {});
                result = currencyArray.map((currency) => obj[currency].rate)
            }
            return result;
        })
}


// V2
// const currencyArraySelector = (state,props)=>{
//
//     const date = props.date
//     const exchangeData = state.exchangeData
//     const currencyArray = state.currency
//
//     if (exchangeData[date].length>0){
//      const obj = exchangeData[date].reduce(function(acc, cur, i) {
//          acc[cur.cc] = cur;
//          return acc;
//      }, {});
//         const result = currencyArray.map((currency) => obj[currency].rate)
//         return result
//     }
// }
// export const createCurrencyExchangeData = () => createSelector(
//     currencyArraySelector,
//     (resData) => resData
// )

//--------------------------------------Data for Chart

export const dataForChartSelector = createSelector(
    exchangeDataSelector,
    currencySelector,
    (data,currencyArray)=>{
        const dataObject = {}
        for (let key in data){
            const tmpObj = data[key].reduce((acc,cur,i)=>{
                acc[cur.cc] = cur
                return acc
            },{})
            dataObject[key] = tmpObj
        }

        const resObject = {
            columns:[
                ["x"]
            ]
        }

        const currencyObj = {}
        currencyArray.forEach((currency,i)=>{
            currencyObj[currency] =[]
        })

       for(let date in dataObject){
           resObject.columns[0].push(normalizerForChart(date))
           currencyArray.forEach((currency,i)=>{
               currencyObj[currency].push((dataObject[date][currency].rate).toFixed(3))
            })
        }

        for (let key in currencyObj){
            currencyObj[key].unshift(key)
            resObject.columns.push(currencyObj[key])
        }

        return resObject
    }


)