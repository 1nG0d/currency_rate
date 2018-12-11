import {INPUT_QUANTITY} from "../constants"

const quantityDefault = 1

const quantityInputReducer = (quantity = quantityDefault, action) =>{
    const {type,payload} = action
    switch (type){
        case (INPUT_QUANTITY): return payload.quantity
    }
    return quantity
}

export default quantityInputReducer