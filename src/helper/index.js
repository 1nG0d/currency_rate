import * as moment from 'moment'

export const dateNormalizer = (date) => {
   return moment(date).format().substring(0,10).replace(/-/g,'');
}

export const dateHumanReadable = (date) => {
    const date_tmp = moment(date).format().substring(0,10).split("-");
    return date_tmp[2] + "-" + date_tmp[1] + "-" + date_tmp[0];
}
export const daysOfWeek = (date)=>{
    return moment(date).format("LLLL").slice(0,3)
}
export const normalizerForChart = (date)=>{
    return date.slice(0,4) + "-" + date.slice(4,6)+ "-" +date.slice(6,8)
}
export const dateNormalizerForApiStyle = (date)=> {
    // 19.12.2018
    const date_tmp = date.substring(0,10).split(".");
    return date_tmp[2]  + date_tmp[1]  + date_tmp[0];
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

