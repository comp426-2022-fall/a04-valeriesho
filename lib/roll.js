export{roll};

function roll(sides, dice, rolls) {
    var results = [];
    for (var i = 0; i < rolls; i++) {
        var tempTotal = 0;
        for (var j = 0; j < dice; j++) {
            tempTotal += Math.floor(Math.random() * sides) + 1;
        }
        results[i] = tempTotal;
    }
    
    let rollOut = {
        sides: sides,
        dice: dice,
        rolls: rolls,
        results: results
    };

    return rollOut;
}