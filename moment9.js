const moment = require("moment");
let s;


s = moment().set('second', 30); // postavuvame sekundi
s = moment().set('hour', 20);
s = moment().set('minute', 30);//postavuvame minuti
s = moment().set({'year': 1989, 'month': 11, 'day' : 10, 'hour': 11, 'minute' : 30});

console.log(s);