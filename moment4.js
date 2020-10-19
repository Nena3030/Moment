const moment = require("moment");

let start;
start = moment().startOf('day').fromNow(); // pred kolku casa zapocnal noviot den
start = moment().startOf('month').fromNow(); // pred kolku dena pocnal mesecot
start = moment().startOf('year').fromNow(); // pred kolku meseci pocnala godinata


console.log (start)