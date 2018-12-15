import * as moment from 'moment'
import {eachDay} from "date-fns"

export const dateNormalizer = (date) => {
   console.log(moment(date).format())
   return moment(date).format().substring(0,10).replace(/-/g,'');
}

export const dateHumanReadable = (date) => {
   return moment(date).format().substring(0,10);
}

export const arrayOfDays = (from, to)=>{
   const arr =  eachDay(from, to)
   return arr.map((day)=>dateNormalizer(moment(day).format()))
}