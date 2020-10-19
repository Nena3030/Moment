const moment = require ("moment");

let min;
min = moment().minute(); //ja pecatime momentalnata minuta
min = moment().get('year');//ja pecatime godinata,get moze no ne mora da se pisuva
min = moment().week();


console.log (min);