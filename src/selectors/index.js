import { createSelector } from 'reselect'

export const currencySelector = (state) => state.currency
export const quantitySelector = (state) => state.quantity

// V1

export const exchangeDataSelector = (state) => state.exchangeData
export const dateSelector = (_,props) => props.date

export const createCurrencyExchangeData = () =>{
    return createSelector(
        currencySelector,
        exchangeDataSelector,
        dateSelector,
        (currencyArray,exchangeData,date)=>{
            let result = [];
            if (exchangeData[date].length > 0 ){
                const tmpArr = exchangeData[date].slice();
                const obj = tmpArr.reduce(function(acc, cur, i) {
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
