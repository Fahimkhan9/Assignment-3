// function of feet to miles
function feetToMile(feet) {
  var mile = feet / 5280;
  return mile;
}

//function of woodCalculator

function woodCalculator(numbersOfChairs, numbersOfTables, numbersOfBeds) {
  var woodsOfChairs = 1 * numbersOfChairs;
  var woodsOfTables = 3 * numbersOfTables;
  var woodsOfBeds = 5 * numbersOfBeds;

  var totalWoods = woodsOfChairs + woodsOfTables + woodsOfBeds;
  return totalWoods;
}

//function of brickCalculator

function brickCalculator(numberOfFloors) {
  if (numberOfFloors <= 10) {
    var totalOfFirstTenFloor = 15000 * numberOfFloors;
    return totalOfFirstTenFloor;
  } else if (numberOfFloors <= 20) {
    var firstTenFloor = Math.floor(numberOfFloors / 10);
    var brickofFirstTenFloor = 15000 * firstTenFloor * 10;

    var secondTenFloor = numberOfFloors % 10;

    var brickofSecondTenFloor = 12000 * secondTenFloor;
    var totalOfsecondTenFloor = brickofFirstTenFloor + brickofSecondTenFloor;
    return totalOfsecondTenFloor;
  } else {
    var temporaryFirstAndSecondFLoor = Math.floor(numberOfFloors / 10);
    var firstTenFloor = temporaryFirstAndSecondFLoor / 2;
    var brickofFirstTenFloor = 15000 * firstTenFloor * 10;

    var secondTenFloor = temporaryFirstAndSecondFLoor / 2;
    var brickofSecondTenFloor = 12000 * secondTenFloor * 10;
    console.log(brickofSecondTenFloor);

    var aboveTwentyFloor = numberOfFloors % 20;
    var brickofaboveTwentyFloor = aboveTwentyFloor * 1000;
    var totalOfFAboveTwentyFloor =
      brickofFirstTenFloor + brickofSecondTenFloor + brickofaboveTwentyFloor;
    return totalOfFAboveTwentyFloor;
  }
}

//function of tinyfriend

function tinyFriend(Friends) {
  var tinyFriend = Friends[0];

  for (let i = 0; i < Friends.length; i++) {
    if (Friends[i].length < tinyFriend.length) {
      tinyFriend = Friends[i];
    }
  }
  return tinyFriend;
}
