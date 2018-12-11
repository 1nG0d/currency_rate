import {SELECT_DATE} from "../constants"

const selectedDateDefault = new Date();

 const dateSelectedReducer = (selectedDate = selectedDateDefault, action) =>{
    const {type,payload} = action

    switch (type){
        case (SELECT_DATE): return payload.date
    }
    return selectedDate
}
export default dateSelectedReducer