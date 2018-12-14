import moment from "moment"

export const dateNormalizer = (date) => {
   return moment(date).format().substring(0,10).replace(/\-/g,'');
};

export const START = 'START';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const actionsSuffix = [START, SUCCESS, ERROR];

export const getDefaultCurrency = ({ currency, date }) => {
   return fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currency}&date=${date}&json`)
       .then(res => res.json())
       .then(response => ({ date, currencyExchangeData: { [currency]: response[0].rate } }))
}