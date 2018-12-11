import moment from "moment"
export const dateNormalizer = (date) => {
   return moment(date).format().substring(0,10).replace(/\-/g,'');
}
