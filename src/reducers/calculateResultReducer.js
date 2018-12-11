import {CALCULATE} from '../constants'

const defaultResult = 0

const calculateResultReducer = (result = defaultResult, action) =>{

    const {type,payload} = action
    switch (type){
        case CALCULATE: {console.log("a11"); return (payload.quantity * payload.exchangeRange).toFixed(2)}
    }
    return result
}
export default calculateResultReducer