import moment from "moment"
export const dateNormalizer = (date) => {
   console.log(moment(date).format())
   return moment(date).format().substring(0,10).replace(/-/g,'');
}


export const dateHumanReadable = (date) => {
   return moment(date).format().substring(0,10);
}
//.splice(4,0,"-").splice(7,0, "-")