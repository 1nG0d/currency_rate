import * as moment from 'moment'



export const dateNormalizer = (date) => {
   return moment(date).format().substring(0,10).replace(/-/g,'');
}

export const dateHumanReadable = (date) => {
   return moment(date).format().substring(0,10);
}

function eachDay(startDate, stopDate) {
    const dateArray = [];
    let currentDate = moment(startDate);
    stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
        dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
}

export const arrayOfDays = (from, to)=>{
   const arr =  eachDay(from, to)

   return arr.map((day)=>dateNormalizer(moment(day).format()))
}

