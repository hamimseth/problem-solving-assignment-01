// feetToMile
function feetToMile(feet) {
    if (feet < 0) {
        return 'Distance cannot be less than zero.';
    }
    else {
        var mile = feet * 0.00018939;
        return mile;
    }
}

// woodCalculator 
function woodCalculator(chair, table, bed) {
    if (chair < 0 || chair == null || table < 0 || table == null || bed < 0 || bed == null) {
        return 'Invalied formating. Try this way, Elample: (1, 1, 1)';
    }
    else {
        var chairNum = chair * 1;
        var tableNum = table * 3;
        var bedNum = bed * 5;
        var totalWood = chairNum + tableNum + bedNum;
        return totalWood;
    }

}

// brickCalculator 
function brickCalculator(floorNumber) {
    switch (true) {
        case (floorNumber > 0 && floorNumber <= 10):

            return floorNumber * 15 * 1000;
            break;
        case floorNumber > 11 && floorNumber <= 20:

            return (floorNumber - 10) * 12 * 1000 + 150000;
            break;
        case floorNumber > 21:

            return (floorNumber - 20) * 10 * 1000 + 270000;
            break;
        default:
            return 'invalied';
    }
}

// tinyFriend
function tinyFriend(str) {
    var tiny = str[0];
    for (var i = 0; i < str.length; i++) {
        var currentNumber = str[i];
        if (currentNumber.length < tiny.length) {
            tiny = currentNumber;
        }
    }
    return tiny;
}



