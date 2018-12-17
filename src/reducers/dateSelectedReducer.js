import {SELECT_DATE_RANGE} from "../constants"
import * as moment from 'moment'
import {arrayOfDays,dateNormalizer} from '../helper'

const selectedDateDefault = [].concat(dateNormalizer(moment().format()));

 const dateSelectedReducer = (state = selectedDateDefault, action) =>{
    const {type,payload} = action
    switch (type){
        case (SELECT_DATE_RANGE): {
            return arrayOfDays(payload.dateRange.from,payload.dateRange.to)
        }
        default: return state
    }
}
export default dateSelectedReducer