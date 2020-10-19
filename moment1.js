const moment = require("moment");

let day;

day = moment().format('dddd'); //go pecati denot
day = moment().format('ddd'); //go pecati denot skrateno vo 3 bukvi
day = moment().format('dd'); //gi pecati prvite 2 bukvi od denot
day = moment().format('d'); //pecati koj den od nedelata e so brojka
console.log (day);