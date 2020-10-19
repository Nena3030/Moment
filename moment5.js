const moment = require ("moment");

let kalendar;
kalendar = moment().subtract(10, 'days').calendar(); // koj datum bilo pred 10 dena od segasnata data
kalendar = moment().subtract(20, 'weeks').calendar(); //koj datum bil pred 20 nedeli od sega
kalendar = moment().subtract(10, 'years').calendar();
kalendar = moment('2003-02-10').subtract(10, 'years').calendar(); 
kalendar = moment().subtract(10, 'days').subtract(5, 'years').calendar();//mozeme da odzemame so poveke parametri


console.log(kalendar)