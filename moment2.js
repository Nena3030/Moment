const moment = require("moment");

let date;
date =moment().format('MMMM Do YYYY, h:mm:ss a'); ; // ja pecati denesnata data po redosled mesec den godina i saat
//dokolku kaj moment() vo zagradite moment().format('MMMM Do YYYY, h:mm:ss a')precizirame data ke ja ispecati taa data sto sme ja postavile

date = moment('1989-11-10').format('MMMM Do YYYY');

console.log (date);
