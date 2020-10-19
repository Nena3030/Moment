const moment = require ("moment");

let end;
end = moment().endOf('day').fromNow(); // ENDOF uste kolku casa ostanuvaat pred pocetok na nov den
end = moment().endOf('year').fromNow();//za kolku meseci ke zavrsi godinata
end = moment().endOf('week').fromNow();


console.log (end);