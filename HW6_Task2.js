function checkProbabilityTheory(count){
    var startFrom = 100;
    var endAt = 1000;
    var counterEven = 0;
    var counterOdd = 0;
    
    for(let i= 0; i < count; i++){
        var random = Math.round(Math.random()*(endAt - startFrom + 1)) + startFrom;
        if (random%2==0) {
            counterEven += 1;
        }
        else {
            counterOdd += 1;
        }
        //console.log(random);
    }
    var percentage = Math.round(100*counterEven/count);
    console.log("Quantity of numbers generated:", count,
                "\nEven numbers:", counterEven, 
                "\nOdd numbers:", counterOdd, 
                "\nPercentage of even to odd:", percentage,"%", 100-percentage);
}
checkProbabilityTheory(120);