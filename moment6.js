const moment = require ("moment");

let kal;

kal = moment().add(10, 'weeks').calendar();//dodavame 10 nedeli od deneska
kal = moment().add(10, 'years').calendar();//dodavame 10 godini od deneska
kal = moment('2080-10-15').add(10, 'weeks').calendar();//dodavame 10 nedeli na dadena data
kal = moment('2080-10-15').add(10, 'years').calendar();//dodavame 10 godini na dadena data


console.log (kal)