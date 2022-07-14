let compteurModule = require('./modules/simple/compteur')

compteurModule.noel()
compteurModule.anniversaire()
compteurModule.longWeekEnd()
compteurModule.solsticeEte()
compteurModule.solsticeHiver()

let person = require('./modules/Func/person');
let person1 = new person('Jean', 'Libert');
console.log(person1.presentation());