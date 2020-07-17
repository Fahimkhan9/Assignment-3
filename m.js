// function of feet to miles

function feetToMile(feet){
var mile = feet / 5280
return mile
}
console.log(feetToMile(146));

//
function woodCalculator(numbersOfChairs,numbersOfTables,numbersOfBeds){
var woodsOfChairs = 1 * numbersOfChairs
var woodsOfTables = 3 * numbersOfTables
var woodsOfBeds = 5 * numbersOfBeds

var totalWoods = woodsOfChairs + woodsOfTables + woodsOfBeds
return totalWoods
}

console.log(woodCalculator(1,3,5));


function brickCalculator(nf){
if (nf <= 10) {
    console.log('10');
} else if(nf <=20) {
    console.log(20);
}else{
    console.log('30');
}
}
brickCalculator(21)









function tinyFriend(Friends){
  var sm   = Friends[0]

for (let i = 0; i < Friends.length; i++) {
  if (Friends[i].length < sm.length) {
      sm = Friends[i]
  }
    
}
return sm
}
console.log(tinyFriend(['aa','aa','aae','j']));







