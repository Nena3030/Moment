const moment = require("moment");

let year;

year = moment().format('[najglupavata godina e] YYYY');
year = moment().format('YYYY [e godina na korona]');
year = moment().format('[ovaa godina e] YYYY [a narednata e] 2021');

console.log(year);